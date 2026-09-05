import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const npm =
  process.env.npm_execpath ||
  path.join(path.dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js');
if (!existsSync(npm))
  throw new Error('Cannot locate npm. Run this script with a standard Node.js/npm installation.');
function run(folder, args) {
  console.log('\nChecking ' + folder + ': npm ' + args.join(' '));
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [npm, ...args], {
      cwd: path.join(root, folder),
      windowsHide: true,
      stdio: 'inherit',
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
    });
    child.once('error', reject);
    child.once('exit', (code) =>
      code === 0 ? resolve() : reject(new Error(folder + ' failed with exit code ' + code)),
    );
  });
}
const projects = [
  'week-2/week-2-js',
  'week-2/week-2-async-js',
  'week-4/middlewares',
  'week-4/hard',
  'week-5/backend',
  'week-6/6.1-todo/backend',
  'week-6/6.2-bookmark-manager/backend',
  'week-7/server',
  'week-7/client',
  'week-9/petAdoption',
  'week-9/timerApp',
  'week-10/userApi',
  'week-10/authSystem',
  'week-11/amazonCart',
  'week-13',
  'week-14/server',
  'week-14/client',
  'week-17',
  'week-18',
  'week-19',
  'tools/verification',
];
try {
  for (const folder of projects)
    if (!existsSync(path.join(root, folder, 'node_modules')))
      await run(folder, ['install', '--no-audit', '--no-fund']);
  await run('week-2/week-2-js', ['test']);
  await run('week-2/week-2-async-js', ['run', 'all', '--', '--runInBand']);
  await run('week-4/middlewares', ['test']);
  await run('week-18', ['run', 'generate']);
  for (const folder of [
    'week-7/client',
    'week-9/petAdoption',
    'week-9/timerApp',
    'week-10/userApi',
    'week-10/authSystem',
    'week-11/amazonCart',
    'week-13',
    'week-14/server',
    'week-14/client',
    'week-17',
    'week-18',
    'week-19',
  ])
    await run(folder, ['run', 'build']);
  await run('tools/verification', ['run', 'dom']);
  await run('tools/verification', ['test']);
  console.log('\nAll assignment checks passed.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
