import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import net from 'node:net';
import { randomBytes } from 'node:crypto';
import { spawn } from 'node:child_process';
import { MongoMemoryServer } from 'mongodb-memory-server';
import EmbeddedPostgres from 'embedded-postgres';
import request from 'supertest';
const root = fileURLToPath(new URL('../../', import.meta.url));
const require = createRequire(import.meta.url);
let checks = 0;
function checked(label) {
  checks++;
  console.log('PASS ' + label);
}
async function port() {
  const server = net.createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const result = server.address().port;
  await new Promise((resolve) => server.close(resolve));
  return result;
}
function run(project, cli, args, extraEnv = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(root, project, cli), ...args], {
      cwd: path.join(root, project),
      env: { ...process.env, ...extraEnv },
      windowsHide: true,
      stdio: 'inherit',
    });
    child.once('error', reject);
    child.once('exit', (code) =>
      code === 0 ? resolve() : reject(new Error(project + ' command failed: ' + code)),
    );
  });
}
async function taskify(mongo, project, dbDirectory, dbName) {
  const localRequire = createRequire(path.join(root, project, 'package.json'));
  const mongoose = localRequire('mongoose');
  process.env.MONGO_URI = mongo.getUri(dbName);
  const { connectToDatabase, User } = localRequire('./' + dbDirectory);
  const { app } = localRequire('./index');
  await connectToDatabase();
  try {
    await User.init();
    const signup = (name) =>
      request(app)
        .post('/user/signup')
        .send({ username: name, password: 'test-password-42' })
        .expect(201);
    const first = await signup('alice'),
      second = await signup('bob');
    const auth = 'Bearer ' + first.body.token,
      other = 'Bearer ' + second.body.token;
    await request(app).post('/todo').send({ title: 'Unauthenticated' }).expect(401);
    await request(app)
      .post('/user/signup')
      .send({ username: 'alice', password: 'test-password-42' })
      .expect(409);
    await request(app)
      .post('/user/login')
      .send({ username: 'alice', password: 'wrong-password' })
      .expect(401);
    await request(app)
      .post('/user/login')
      .send({ username: 'alice', password: 'test-password-42' })
      .expect(200);
    const created = await request(app)
      .post('/todo')
      .set('Authorization', auth)
      .send({ title: 'Ship the assignment', description: 'Integration test' })
      .expect(201);
    const id = created.body.todo._id;
    await request(app)
      .put('/todo/' + id)
      .set('Authorization', other)
      .send({ completed: true })
      .expect(404);
    await request(app)
      .delete('/todo/' + id)
      .set('Authorization', other)
      .expect(404);
    const updated = await request(app)
      .put('/todo/' + id)
      .set('Authorization', auth)
      .send({ status: 'Done' })
      .expect(200);
    assert.equal(updated.body.todo.completed, true);
    const list = await request(app).get('/todo').set('Authorization', auth).expect(200);
    assert.equal(list.body.todos.length, 1);
    const empty = await request(app).get('/todo').set('Authorization', other).expect(200);
    assert.equal(empty.body.todos.length, 0);
    assert.notEqual((await User.findOne({ username: 'alice' })).password, 'test-password-42');
    await request(app)
      .delete('/todo/' + id)
      .set('Authorization', auth)
      .expect(200);
    await request(app).post('/user/logout').set('Authorization', auth).expect(200);
    await request(app).get('/todo').set('Authorization', auth).expect(401);
    checked(project + ': signup/login, password hashing, task CRUD, ownership, logout revocation');
  } finally {
    await mongoose.disconnect();
  }
}
async function courses(mongo, project, entry, dbName) {
  const localRequire = createRequire(path.join(root, project, 'package.json'));
  const mongoose = localRequire('mongoose');
  process.env.MONGO_URI = mongo.getUri(dbName);
  const { connectToDatabase, Account } = localRequire(
    entry.replace(/server\.js$/, 'models/index.js'),
  );
  const { app } = localRequire(entry);
  await connectToDatabase();
  try {
    await Account.init();
    const signup = (role, name) =>
      request(app)
        .post('/' + role + '/signup')
        .send({ username: name, password: 'test-password-42' })
        .expect(201);
    const admin = (await signup('admin', 'teacher')).body.token;
    const otherAdmin = (await signup('admin', 'another-teacher')).body.token;
    const student = (await signup('users', 'student')).body.token;
    const as = (token) => ({ Authorization: 'Bearer ' + token });
    await request(app)
      .post('/admin/login')
      .set('username', 'teacher')
      .set('password', 'test-password-42')
      .expect(200);
    await request(app).get('/admin/courses').set(as(student)).expect(403);
    const input = {
      title: 'Web development',
      description: 'Learn by building.',
      price: 99,
      published: false,
      imageLink: '',
    };
    const created = await request(app)
      .post('/admin/courses')
      .set(as(admin))
      .send(input)
      .expect(201);
    const id = created.body.courseId;
    const hidden = await request(app).get('/users/courses').set(as(student)).expect(200);
    assert.equal(hidden.body.courses.length, 0);
    await request(app)
      .post('/users/courses/' + id)
      .set(as(student))
      .expect(404);
    await request(app)
      .put('/admin/courses/' + id)
      .set(as(otherAdmin))
      .send({ ...input, published: true })
      .expect(404);
    await request(app)
      .put('/admin/courses/' + id)
      .set(as(admin))
      .send({ ...input, published: true })
      .expect(200);
    await request(app)
      .post('/users/courses/' + id)
      .set(as(student))
      .expect(200);
    await request(app)
      .post('/users/courses/' + id)
      .set(as(student))
      .expect(200);
    const purchased = await request(app)
      .get('/users/purchasedCourses')
      .set(as(student))
      .expect(200);
    assert.equal(purchased.body.purchasedCourses.length, 1);
    await request(app)
      .post('/admin/courses')
      .set(as(admin))
      .send({ ...input, price: -1 })
      .expect(400);
    checked(
      project + ': roles, instructor ownership, draft visibility, enrollment, duplicate purchase',
    );
  } finally {
    await mongoose.disconnect();
  }
}
async function memoryApps() {
  const { app: todo } = await import(
    pathToFileURL(path.join(root, 'week-6/6.1-todo/backend/index.js'))
  );
  await request(todo).post('/todos').send({ task: ' ' }).expect(400);
  const created = await request(todo).post('/todos').send({ task: 'Read JavaScript' }).expect(201);
  const id = created.body.id;
  const found = await request(todo).get('/todos/search?q=javascript').expect(200);
  assert.equal(found.body.length, 1);
  await request(todo)
    .put('/todos/' + id)
    .send({ completed: 'yes' })
    .expect(400);
  const updated = await request(todo)
    .put('/todos/' + id)
    .send({ task: 'Read TypeScript', completed: true })
    .expect(200);
  assert.equal(updated.body.completed, true);
  await request(todo)
    .delete('/todos/' + id)
    .expect(204);
  await request(todo)
    .delete('/todos/' + id)
    .expect(404);
  checked('Week 6 todo: validation, create, search, edit, completion, delete');
  const { app: bookmarks } = await import(
    pathToFileURL(path.join(root, 'week-6/6.2-bookmark-manager/backend/index.js'))
  );
  await request(bookmarks)
    .post('/bookmarks')
    .send({ category: 'Unsafe', url: 'javascript:alert(1)' })
    .expect(400);
  const bookmark = await request(bookmarks)
    .post('/bookmarks')
    .send({ category: 'Reading', url: 'https://example.com' })
    .expect(201);
  const bid = bookmark.body.id;
  await request(bookmarks)
    .patch('/bookmarks/' + bid + '/favorite')
    .send({ favorite: true })
    .expect(200);
  const favorites = await request(bookmarks).get('/bookmarks?q=reading&favorite=true').expect(200);
  assert.equal(favorites.body.length, 1);
  await request(bookmarks)
    .patch('/bookmarks/' + bid + '/favorite')
    .send({ favorite: false })
    .expect(200);
  const empty = await request(bookmarks).get('/bookmarks?favorite=true').expect(200);
  assert.equal(empty.body.length, 0);
  await request(bookmarks)
    .delete('/bookmarks/' + bid)
    .expect(204);
  checked('Week 6 bookmarks: URL validation, search, favorite/unfavorite, delete');
}
async function eventApp(databaseUrl) {
  const nextPort = await port();
  const env = {
    DATABASE_URL: databaseUrl,
    NEXTAUTH_SECRET: randomBytes(32).toString('hex'),
    NEXTAUTH_URL: 'http://localhost:' + nextPort,
    NEXT_TELEMETRY_DISABLED: '1',
  };
  const child = spawn(
    process.execPath,
    [path.join(root, 'week-19/node_modules/next/dist/bin/next'), 'start', '-p', String(nextPort)],
    {
      cwd: path.join(root, 'week-19'),
      env: { ...process.env, ...env },
      windowsHide: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );
  let logs = '';
  child.stdout.on('data', (data) => {
    logs += data.toString();
  });
  child.stderr.on('data', (data) => {
    logs += data.toString();
  });
  const base = 'http://localhost:' + nextPort;
  try {
    const started = Date.now();
    while (true) {
      try {
        const response = await fetch(base);
        if (response.ok) break;
      } catch {
        /* wait for server startup */
      }
      if (child.exitCode !== null || Date.now() - started > 60000)
        throw new Error('Next server failed: ' + logs);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    async function json(url, method = 'GET', body, cookie = '', expected = 200) {
      const response = await fetch(base + url, {
        method,
        headers: { 'Content-Type': 'application/json', Cookie: cookie },
        body: body === undefined ? undefined : JSON.stringify(body),
        redirect: 'manual',
      });
      const data = await response.json();
      assert.equal(response.status, expected, url + ': ' + JSON.stringify(data));
      return data;
    }
    async function account(name) {
      await json(
        '/api/user',
        'POST',
        { username: name, email: name + '@example.com', password: 'test-password-42' },
        '',
        201,
      );
      const csrfResponse = await fetch(base + '/api/auth/csrf');
      const csrf = await csrfResponse.json();
      const cookies = csrfResponse.headers.getSetCookie().map((value) => value.split(';')[0]);
      const response = await fetch(base + '/api/auth/callback/credentials', {
        method: 'POST',
        redirect: 'manual',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: cookies.join('; '),
        },
        body: new URLSearchParams({
          csrfToken: csrf.csrfToken,
          email: name + '@example.com',
          password: 'test-password-42',
          json: 'true',
          callbackUrl: base,
        }),
      });
      cookies.push(...response.headers.getSetCookie().map((value) => value.split(';')[0]));
      const cookie = cookies.join('; ');
      await json('/api/user', 'GET', undefined, cookie);
      return cookie;
    }
    const host = await account('host'),
      guest = await account('guest');
    await json(
      '/api/user',
      'POST',
      { username: 'other', email: 'host@example.com', password: 'test-password-42' },
      '',
      409,
    );
    await json('/api/events', 'POST', {}, '', 401);
    const input = {
      title: 'JavaScript meetup',
      description: 'Build and learn together.',
      location: 'Bengaluru',
      date: new Date(Date.now() + 86400000).toISOString(),
    };
    const { event } = await json('/api/events', 'POST', input, host, 201);
    const search = await json('/api/events?q=javascript');
    assert.equal(search.events.length, 1);
    await json(
      '/api/events/' + event.id,
      'PATCH',
      { ...input, title: 'Edited meetup' },
      guest,
      404,
    );
    await json('/api/events/' + event.id, 'PATCH', { ...input, title: 'Edited meetup' }, host);
    await json('/api/events/' + event.id + '/book', 'POST', undefined, guest, 201);
    await json('/api/events/' + event.id + '/book', 'POST', undefined, guest, 409);
    const ownBookings = await json('/api/bookings', 'GET', undefined, guest);
    assert.equal(ownBookings.bookings.length, 1);
    const hostsBookings = await json('/api/bookings', 'GET', undefined, host);
    assert.equal(hostsBookings.bookings.length, 0);
    await json('/api/events/' + event.id, 'DELETE', undefined, guest, 404);
    await json('/api/events/' + event.id + '/book', 'DELETE', undefined, guest);
    await json('/api/events/' + event.id + '/book', 'POST', undefined, guest, 201);
    await json('/api/events/' + event.id, 'DELETE', undefined, host);
    const afterDelete = await json('/api/bookings', 'GET', undefined, guest);
    assert.equal(afterDelete.bookings.length, 0);
    checked(
      'Week 19: NextAuth login, registration, event CRUD/search, ownership, bookings, cancellation, cascade deletion',
    );
  } finally {
    if (child.exitCode === null) {
      child.kill();
      await new Promise((resolve) => child.once('exit', resolve));
    }
  }
}
async function main() {
  process.env.JWT_SECRET = randomBytes(32).toString('hex');
  await memoryApps();
  const mongo = await MongoMemoryServer.create();
  try {
    await taskify(mongo, 'week-4/hard', 'database', 'taskify4_test');
    await taskify(mongo, 'week-5/backend', 'db', 'taskify5_test');
    await courses(mongo, 'week-7/server', './server.js', 'courses7_test');
    await run('week-14/server', 'node_modules/typescript/bin/tsc', []);
    await courses(mongo, 'week-14/server', './dist/server.js', 'courses14_test');
  } finally {
    await mongo.stop();
  }
  const directory = path.join(root, 'tools/verification/.data/pg-' + Date.now());
  await fs.mkdir(directory, { recursive: true });
  const pgPort = await port(),
    password = randomBytes(20).toString('hex');
  const postgres = new EmbeddedPostgres({
    databaseDir: directory,
    user: 'postgres',
    password,
    port: pgPort,
    persistent: true,
    onLog: () => {},
    onError: (message) => {
      if (/fatal|error/i.test(String(message))) console.error(message);
    },
  });
  try {
    await postgres.initialise();
    await postgres.start();
    for (const name of ['travel_test', 'prisma_travel_test', 'events_test'])
      await postgres.createDatabase(name);
    const url = (name) => 'postgresql://postgres:' + password + '@127.0.0.1:' + pgPort + '/' + name;
    await run('week-17', 'node_modules/jest/bin/jest.js', ['--runInBand'], {
      DATABASE_URL: url('travel_test'),
    });
    checked('Week 17: supplied PostgreSQL integration tests');
    await run('week-18', 'node_modules/prisma/build/index.js', ['migrate', 'deploy'], {
      DATABASE_URL: url('prisma_travel_test'),
    });
    await run('week-18', 'node_modules/jest/bin/jest.js', ['--runInBand'], {
      DATABASE_URL: url('prisma_travel_test'),
    });
    checked('Week 18: supplied Prisma integration tests');
    await run('week-19', 'node_modules/prisma/build/index.js', ['migrate', 'deploy'], {
      DATABASE_URL: url('events_test'),
    });
    await eventApp(url('events_test'));
  } finally {
    await postgres.stop();
  }
  console.log(
    'Passed ' +
      checks +
      ' integration groups. Test databases were isolated from your configured databases.',
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
