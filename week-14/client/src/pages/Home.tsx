import { FormEvent, useEffect, useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Courses from '../components/Courses';
import { Course, Session, AuthProps } from '../types';
function readSession(): Session | null {
  try {
    const saved = JSON.parse(sessionStorage.getItem('coursify-session') || 'null');
    return saved?.token && ['admin', 'user'].includes(saved.role) ? saved : null;
  } catch {
    return null;
  }
}
async function api<T>(
  path: string,
  session: Session | null,
  method = 'GET',
  body?: unknown,
): Promise<T> {
  const response = await fetch(path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (session?.token || ''),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
}
export default function Home() {
  const [session, setSession] = useState<Session | null>(readSession);
  const [register, setRegister] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [owned, setOwned] = useState<Course[]>([]);
  const [viewOwned, setViewOwned] = useState(false);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<Course | null>(null);
  useEffect(() => {
    if (!session) return;
    let active = true;
    Promise.all([
      api<{ courses: Course[] }>(
        (session.role === 'admin' ? '/admin' : '/users') + '/courses',
        session,
      ),
      session.role === 'user'
        ? api<{ purchasedCourses: Course[] }>('/users/purchasedCourses', session)
        : Promise.resolve({ purchasedCourses: [] }),
    ])
      .then(([catalog, purchases]) => {
        if (active) {
          setCourses(catalog.courses);
          setOwned(purchases.purchasedCourses);
        }
      })
      .catch((error) => {
        if (active) setMessage(error.message);
      });
    return () => {
      active = false;
    };
  }, [session]);
  const authenticate: AuthProps['onSubmit'] = async (values, action) => {
    setBusy(true);
    setMessage('');
    try {
      const result = await api<Session>(
        (values.role === 'admin' ? '/admin' : '/users') + '/' + action,
        null,
        'POST',
        values,
      );
      sessionStorage.setItem('coursify-session', JSON.stringify(result));
      setSession(result);
      setViewOwned(false);
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setBusy(false);
    }
  };
  async function purchase(id: string) {
    setBusy(true);
    try {
      await api('/users/courses/' + id, session, 'POST');
      setOwned(
        (await api<{ purchasedCourses: Course[] }>('/users/purchasedCourses', session))
          .purchasedCourses,
      );
      setMessage('You are enrolled. Find this course in My courses.');
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function saveCourse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    const body = {
      title: data.get('title'),
      description: data.get('description'),
      price: Number(data.get('price')),
      imageLink: data.get('imageLink'),
      published: data.has('published'),
    };
    try {
      await api(
        '/admin/courses' + (editing ? '/' + editing._id : ''),
        session,
        editing ? 'PUT' : 'POST',
        body,
      );
      setCourses((await api<{ courses: Course[] }>('/admin/courses', session)).courses);
      setEditing(null);
      form.reset();
      setMessage('Course saved.');
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setBusy(false);
    }
  }
  function logout() {
    sessionStorage.removeItem('coursify-session');
    setSession(null);
    setCourses([]);
    setOwned([]);
    setEditing(null);
    setMessage('Signed out.');
  }
  return (
    <main>
      <header>
        <div>
          <p>LEARN SOMETHING THAT LASTS</p>
          <h1>Coursify.</h1>
        </div>
        {session && (
          <nav>
            {session.role === 'user' && (
              <>
                <button className="secondary" onClick={() => setViewOwned(false)}>
                  Explore
                </button>
                <button className="secondary" onClick={() => setViewOwned(true)}>
                  My courses ({owned.length})
                </button>
              </>
            )}
            <button onClick={logout}>Sign out</button>
          </nav>
        )}
      </header>
      <p role="status">{message}</p>
      {!session ? (
        <>
          <button className="secondary" onClick={() => setRegister(!register)}>
            {register ? 'Already have an account?' : 'Create an account'}
          </button>
          {register ? (
            <Register onSubmit={authenticate} busy={busy} />
          ) : (
            <Login onSubmit={authenticate} busy={busy} />
          )}
        </>
      ) : (
        <>
          {session.role === 'admin' && (
            <form key={editing?._id || 'new'} onSubmit={saveCourse}>
              <h2>{editing ? 'Edit course' : 'Publish your knowledge'}</h2>
              <label>
                Title
                <input name="title" required maxLength={150} defaultValue={editing?.title} />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  required
                  maxLength={4000}
                  defaultValue={editing?.description}
                />
              </label>
              <div className="grid">
                <label>
                  Price (₹)
                  <input
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    defaultValue={editing?.price ?? 0}
                  />
                </label>
                <label>
                  Image URL (optional)
                  <input name="imageLink" type="url" defaultValue={editing?.imageLink} />
                </label>
              </div>
              <label>
                <input
                  name="published"
                  type="checkbox"
                  defaultChecked={editing?.published ?? true}
                />
                Publish to students
              </label>
              <button disabled={busy}>Save course</button>
              {editing && (
                <button type="button" className="secondary" onClick={() => setEditing(null)}>
                  Cancel
                </button>
              )}
            </form>
          )}
          <h2>
            {session.role === 'admin'
              ? 'Your courses'
              : viewOwned
                ? 'My courses'
                : 'Find your next skill'}
          </h2>
          <Courses
            courses={viewOwned ? owned : courses}
            owned={owned.map((course) => course._id)}
            admin={session.role === 'admin'}
            busy={busy}
            onPurchase={purchase}
            onEdit={setEditing}
          />
        </>
      )}
    </main>
  );
}
