# **Authentication App with Signup Signin and Logout Features**

Create a authentication application using Express for the backend and JavaScript for the frontend. The application will support user signup, signin, and logout features.

## **Setup Guide**

1. Navigate to `week-5/Auth-App/backend` and Load the index.html in a browser to interact with the application.

    ```sh
    npm install
    ```

2. Start the server:

    ```sh
    node index.js
    ```

3. Go inside `week-5/Auth-App/frontend` and Load the index.html in a browser to interact with the application.

<hr/>

### **Backend Tasks**

1. **Create API Routes:**

    - Implement three main routes:
        - **`/signup` (POST):** Handles new user registrations.
        - **`/signin` (POST):** Manages user authentication.
        - **`/me` (GET):** Returns authenticated user details.

2. **Implement User Storage:**

    - Create an in-memory variable called `users` to store user data, including the username, password, and age.
        - Instead of storing plain passwords, store hashed passwords using your own logic or the bcrypt library.
        - Example:
            - If the password is `Harkirat@123`, store it as a hashed string like `hdjkan232nij298oonxdjnjnj1bb`.
            - Bcrypt Library - https://www.npmjs.com/package/bcrypt

3. **Signup Route (`/signup`):**

    - Validate that the username and password are at least 5 characters long.
    - Ensure the user doesn’t already exist by checking the username.
    - Hash the password and store the new user data (username, hashed password, age) in the `users` array.
    - Respond with appropriate success or error messages.

4. **Signin Route (`/signin`):**

    - Authenticate the user by checking the username and comparing the entered password with the stored hashed password using `bcrypt`.
    - If credentials are valid, generate a JWT token and send it to the user; otherwise, send an error message.
    - Ensure the token contains only necessary information (e.g., username).

5. **Get User Info Route (`/me`):**

    - Use middleware to verify JWT tokens sent by the client.
    - Extract the user’s information (username and age) from the token and stored data.
    - Send back the username and age to the client, avoiding sensitive data like the password.

### **Frontend Tasks**

1. **Display Signin Page by Default:**

    - On page load, ensure the signin form is visible with an option to switch to the signup form.

2. **Signup Form and Functionality:**

    - Create input fields for username, password, and age.
    - Implement the `signup()` function to send a POST request to the `/signup` endpoint.
    - Handle server responses to display/alert messages indicating success or errors (e.g., user already exists).

3. **Signin Form and Functionality:**

    - Create input fields for username and password.
    - Implement the `signin()` function to send a POST request to the `/signin` endpoint with the credentials.
    - Upon successful authentication, store the received JWT token in `localStorage`.
    - Trigger the `getUserInformation()` function to fetch and display user details.

4. **Fetch User Information:**

    - Implement the `getUserInformation()` function to request user data from the `/me` route using the stored token.
    - Display the user's username and age in a personalized message (e.g., `Hi Harkirat, your age is 28.`).
    - Ensure this section is updated only when valid data is received.

5. **Logout Functionality:**

    - Implement a `logout()` function that removes the JWT token from `localStorage`.
    - Clear displayed user information and return the user to the signin page.
    - Show a message confirming the user has successfully logged out.

6. **Navigation and Form Switching:**
    - Provide buttons to switch between signup and signin forms.
    - Ensure proper navigation by hiding and showing forms based on user interactions.
    - Include a logout button that is only visible when the user is signed in.
