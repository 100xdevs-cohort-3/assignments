let session = null;
try {
  session = JSON.parse(sessionStorage.getItem('coursify-easy') || 'null');
} catch {
  /* start signed out */
}
let courses = [],
  purchased = [],
  editing = null;
const message = document.querySelector('#message');
const editor = document.querySelector('#editor');
async function api(path, method = 'GET', body) {
  const response = await fetch(path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (session?.token || ''),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
}
function show() {
  document.querySelector('#auth').hidden = !!session;
  document.querySelector('#workspace').hidden = !session;
  document.querySelector('#logout').hidden = !session;
  editor.hidden = session?.role !== 'admin';
  document.querySelector('#owned-filter').hidden = session?.role !== 'user';
}
async function load() {
  try {
    courses = (await api((session.role === 'admin' ? '/admin' : '/users') + '/courses')).courses;
    purchased =
      session.role === 'user' ? (await api('/users/purchasedCourses')).purchasedCourses : [];
    render();
  } catch (error) {
    message.textContent = error.message;
  }
}
function render() {
  const target = document.querySelector('#courses');
  target.replaceChildren();
  const list =
    document.querySelector('#owned').checked && session.role === 'user' ? purchased : courses;
  if (!list.length) {
    const p = document.createElement('p');
    p.textContent = 'No courses yet.';
    target.append(p);
  }
  for (const course of list) {
    const card = document.createElement('article');
    if (course.imageLink) {
      const image = document.createElement('img');
      image.src = course.imageLink;
      image.alt = '';
      image.height = 160;
      image.onerror = () => image.remove();
      card.append(image);
    }
    const title = document.createElement('h2');
    title.textContent = course.title;
    const description = document.createElement('p');
    description.textContent = course.description;
    const price = document.createElement('p');
    price.textContent =
      '₹' +
      course.price.toLocaleString('en-IN') +
      (session.role === 'admin' ? (course.published ? ' · Published' : ' · Draft') : '');
    const button = document.createElement('button');
    button.textContent =
      session.role === 'admin'
        ? 'Edit course'
        : purchased.some((item) => item._id === course._id)
          ? 'Enrolled'
          : 'Enroll';
    button.disabled = button.textContent === 'Enrolled';
    button.onclick = async () => {
      if (session.role === 'admin') {
        editing = course._id;
        document.querySelector('#editor-title').textContent = 'Edit course';
        for (const key of ['title', 'description', 'price', 'imageLink'])
          editor.elements[key].value = course[key];
        editor.elements.published.checked = course.published;
        editor.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      button.disabled = true;
      try {
        await api('/users/courses/' + course._id, 'POST');
        message.textContent = 'Enrollment complete.';
        await load();
      } catch (error) {
        message.textContent = error.message;
        button.disabled = false;
      }
    };
    card.append(title, description, price, button);
    target.append(card);
  }
}
document.querySelector('#auth').onsubmit = async (event) => {
  event.preventDefault();
  const button = event.submitter;
  button.disabled = true;
  const values = Object.fromEntries(new FormData(event.target));
  try {
    session = await api(
      (values.role === 'admin' ? '/admin' : '/users') + '/' + (button.value || 'login'),
      'POST',
      values,
    );
    sessionStorage.setItem('coursify-easy', JSON.stringify(session));
    event.target.reset();
    message.textContent = 'Welcome.';
    show();
    await load();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
};
editor.onsubmit = async (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(editor));
  const button = editor.querySelector('button');
  button.disabled = true;
  try {
    await api('/admin/courses' + (editing ? '/' + editing : ''), editing ? 'PUT' : 'POST', {
      ...values,
      price: Number(values.price),
      published: editor.elements.published.checked,
    });
    editing = null;
    editor.reset();
    document.querySelector('#editor-title').textContent = 'Create a course';
    message.textContent = 'Course saved.';
    await load();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
};
document.querySelector('#cancel').onclick = () => {
  editing = null;
  editor.reset();
  document.querySelector('#editor-title').textContent = 'Create a course';
};
document.querySelector('#owned').onchange = render;
document.querySelector('#logout').onclick = () => {
  session = null;
  editing = null;
  sessionStorage.removeItem('coursify-easy');
  show();
  message.textContent = 'Signed out.';
};
show();
if (session) load();
