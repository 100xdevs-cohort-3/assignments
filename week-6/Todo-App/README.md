# **Todo App**

Create a complete Todo application using Express for the backend and JavaScript for the frontend. The application will support user signup, signin, and logout features, along with todo management.

## **Setup Guide**

1. Navigate to `week-5/Todo-App/backend` and run:

    ```sh
    npm install
    ```

2. Start the server:

    ```sh
    node index.js
    ```

3. Go inside `week-5/Todo-App/frontend` and run


### **Backend Tasks:**

1. Create 2 in-memory variable called `users` and `todos`. `users` will store username and password and `todos` will store id, usename, title and done.

    - Instead of storing plain passwords, store hashed passwords using your own logic or the `bcrypt` library.
    - Example:

        - If the password is `Harkirat@123`, store it as a hashed string like `hdjkan232nij298oonxdjnjnj1bb`.
        - Bcrypt Library - https://www.npmjs.com/package/bcrypt

        ```js
        users = [
            { username: "Harkirat", password: "abc6x0jbdjeet23749034hjgyuw" }
        ];

        todos = [
            { id: 1, username: "Harkirat", title: "Go to Gym", done: false },
            { id: 2, username: "Bharat", title: "Attend Live Class", done: true }
            { id: 3, username: "Harkirat", title: "Solve Assignment", done: true }
        ];
        ```

2. Implement the `/signup` POST route to store user information in the `users` array.
    - Ensure the username and password(In hashed format) are at least 5 characters long.
    - Ensure the same user cannot sign up twice.
3. Implement the `/signin` POST route to authenticate users and generate a JWT token.
    - Validate user credentials and respond with messages such as `Invalid Credentials` or `Signin Successful`.
4. Implement middleware to validate JWT tokens for protected routes.
5. Implement the `/todos` GET route to return all todos data.
6. Implement the `/todos` POST route to create new todos data with id, username, title and done.
7. Implement the `/todos/:id` PUT route to update todos title for a specific id.
8. Implement the `/todos/:id/done` PUT route update todos done field true/false based on incoming request.
9. Implement the `/todos/:id` DELETE route to delete a specific todos data.


### **Frontend Tasks**

1. **Default Signin Page**:
    - On page load, ensure the signin page should be displayed by default.
    - If no account exists, navigate to the signup page.

2. **Signup Functionality**:

    - Create a form with fields for username and password.
    - Implement `signup()` to send user data to the `/signup` route.
    - Alert the user with a success message and navigate to the signin page if signup successfull.

3. **Signin Functionality**:

    - Create a form with fields for username and password.
    - Implement `signin()` to authenticate the user and store the JWT token in `localStorage`.
    - Alert the user with a success message and navigate to the todos page after successful signin.

4. **Todos Page**:
    - **View/Read Todos**: Implement `getTodos()` to display the todos page with data where users can manage their todos.
    - **Add Todo**: Implement `addTodo()` to create new todos.
    - **Update Todo**: Implement `updateTodo()` to modify existing todos.
    - **Delete Todo**: Implement `deleteTodo()` to remove todos.
    - **Toggle Done**: Implement `toggleTodoDone()` to mark todos as done or undone.
    - **Logout**: Implement `logout()` to clear the JWT token and navigate back to the signin page.