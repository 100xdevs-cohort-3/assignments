function FormComponent(handler, btnText) {
  const formContainer = document.createElement("div");
  const header = document.createElement("h1");
  const userNameInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const spanEl = document.createElement("span");
  const linkEl = document.createElement("a");
  const submitBtn = document.createElement("button");

  header.innerHTML = "Welcome to taskify";

  userNameInput.type = "text";
  userNameInput.id = "username";
  userNameInput.placeholder = "Enter username";

  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.placeholder = "Enter password";

  if (btnText === "Sign Up") {
    linkEl.innerHTML = "Sign In";
    linkEl.onclick = () => renderer(FormComponent(signIn, "Sign In"));

    spanEl.innerHTML = "Already have an Account?";
  } else {
    linkEl.innerHTML = "Sign Up";
    linkEl.onclick = () => renderer(FormComponent(signUp, "Sign Up"));

    spanEl.innerHTML = "Don't have an Account?";
  }

  spanEl.appendChild(linkEl);

  submitBtn.innerHTML = btnText;
  submitBtn.onclick = () => handler();

  formContainer.id = "form";

  formContainer.appendChild(header);
  formContainer.appendChild(userNameInput);
  formContainer.appendChild(passwordInput);
  formContainer.appendChild(spanEl);
  formContainer.appendChild(submitBtn);

  return formContainer;
}

async function TodoComponent() {
  let todos = await getTodos();

  const container = document.createElement("div");
  const header = document.createElement("div");
  const headerTitle = document.createElement("h1");
  const inputContainer = document.createElement("div");
  const titleInput = document.createElement("input");
  const descInput = document.createElement("input");
  const addTodoBtn = document.createElement("button");
  const todosContainer = document.createElement("div");
  const logOutBtn = document.createElement("button");

  headerTitle.innerHTML = "Your Todos";

  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.placeholder = "Title";

  descInput.type = "text";
  descInput.id = "description";
  descInput.placeholder = "Description";

  addTodoBtn.innerHTML = "Add Todo";
  addTodoBtn.onclick = () => addTodo();

  todosContainer.id = "todos";
  todos.forEach((todo) => {
    const todoContainer = document.createElement("div");
    const todoTitle = document.createElement("span");
    const todoDesc = document.createElement("span");
    const todoTime = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoTitle.innerHTML = todo.title;
    todoDesc.innerHTML = todo.description;
    todoTime.innerHTML = new Date(Number(todo.createdAt)).toLocaleString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );

    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = () => deleteTodo(todo);

    todoTitle.classList.add("title");
    todoDesc.classList.add("desc");
    todoTime.classList.add("time");

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDesc);
    todoContainer.appendChild(todoTime);
    todoContainer.appendChild(deleteBtn);

    todosContainer.appendChild(todoContainer);
  });

  logOutBtn.innerHTML = "Log Out";
  logOutBtn.id = "logout";
  logOutBtn.onclick = () => logOut();

  header.id = "header";
  header.appendChild(headerTitle);
  header.appendChild(logOutBtn);

  inputContainer.id = "inputs";
  inputContainer.appendChild(titleInput);
  inputContainer.appendChild(descInput);
  inputContainer.appendChild(addTodoBtn);

  container.id = "main";
  container.appendChild(header);
  container.appendChild(todosContainer);
  container.appendChild(inputContainer);

  return container;
}

async function signUp() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  try {
    await axios.post("http://localhost:3000/user/signup", {
      username: username.value,
      password: password.value,
    });

    renderer(FormComponent(signIn, "Sign In"));
  } catch (error) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = error.response.data.error;
  }
}

async function signIn() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  try {
    const response = await axios.post("http://localhost:3000/user/signin", {
      username: username.value,
      password: password.value,
    });

    localStorage.setItem("token", response.data.token);

    renderer(await TodoComponent());
  } catch (error) {
    console.log(error);
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = error.response.data.error;
  }
}

async function getTodos() {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:3000",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    return response.data.todos;
  } catch (error) {
    console.error(error);
  }
}

async function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const createdAt = Date.now();

  try {
    await axios({
      method: "POST",
      url: "http://localhost:3000",
      data: {
        title,
        description,
        createdAt,
      },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    renderer(await TodoComponent());
  } catch (error) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = error.response.data.error;
  }
}

async function deleteTodo(todo) {
  try {
    await axios({
      method: "DELETE",
      url: "http://localhost:3000",
      data: {
        id: todo._id,
      },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    renderer(await TodoComponent());
  } catch (error) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = error.response.data.error;
  }
}

function logOut() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  renderer(FormComponent(signIn, "Sign In"));
}

function renderer(component) {
  document.getElementById("container").innerHTML = "";
  document.getElementById("error").style.display = "none";
  document.getElementById("error").innerHTML = "";

  document.getElementById("container").appendChild(component);
}

async function main() {
  if (localStorage.getItem("token")) {
    renderer(await TodoComponent());
  } else {
    renderer(FormComponent(signIn, "Sign In"));
  }
}

main();
