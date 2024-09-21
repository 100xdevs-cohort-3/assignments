# **Personal Finance Tracker**

Create a Personal Finance Tracker application using Express for the backend and JavaScript for the frontend. The application will support user signup, signin, and logout features, along with managing income and expenses.

## **Setup Guide**

1. Navigate to `week-5/Finance-Tracker-App/backend` and run:

    ```sh
    npm install
    ```

2. Start the server:

    ```sh
    node index.js
    ```

3. Go inside `week-5/Finance-Tracker-App/frontend` and open `index.html` in your browser to start interacting with the application.


### **Backend Tasks**

1. **Create In-Memory Storage**:

    - Create two in-memory variables called `users` and `transactions`.
    - `users` will store username, password, and email.
    - `transactions` will store id, username, amount, type, category, and date.

    - Instead of storing plain passwords, store hashed passwords using the `bcrypt` library.

        ```js

        let users = [
            { username: "Harkirat", password: "bj239jkwqhdjq9329ehbdsjfb" }
        ];

        let transactions = [
            { id: 1, username: "Harkirat", amount: 500, type: "income", category: "Salary", date: "2024-09-12" },
            { id: 2, username: "Harkirat", amount: 200, type: "expense", category: "Groceries", date: "2024-09-13" }
        ];
        ```

2. **Implement Routes**:

    - **POST `/signup`**:
        - Store user information in the `users` array.
        - Ensure the username, password (hashed), and email are valid and unique.

    - **POST `/signin`**:
        - Authenticate users and generate a JWT token.
        - Validate user credentials and respond with appropriate messages.

    - **GET `/transactions`**:
        - Return all transactions for the authenticated user.

    - **POST `/transactions`**:
        - Create new transactions with details such as amount, type, category, and date.

    - **PATCH `/transactions/:id`**:
        - Update the transaction details (amount, type, category, date) for a specific ID.

    - **DELETE `/transactions/:id`**:
        - Delete a specific transaction.

    - **GET `/summary`**:
        - Generate and return a summary of financial data, including total income, expenses, and breakdown by category.

3. **Implement JWT Authentication Middleware**:
    - Secure endpoints by validating JWT tokens to ensure only authenticated users can access their data.

### **Frontend Tasks**

1. **Default Signin Page**:

    - On page load, ensure the signin page is displayed by default.
    - If no account exists, navigate to the signup page.

2. **Signup Functionality**:

    - Create a form with fields for username, password, and email.
    - Implement `signup()` to send user data to the `/signup` route.
    - Alert the user with a success message and navigate to the signin page if signup is successful.

3. **Signin Functionality**:

    - Create a form with fields for username and password.
    - Implement `signin()` to authenticate the user and store the JWT token in `localStorage`.
    - Alert the user with a success message and navigate to the dashboard page after successful signin.

4. **Dashboard Page**:

    - **View Transactions**: Implement `getTransactions()` to display the list of transactions.
    - **Add Transaction**: Implement `addTransaction()` to create new transactions.
    - **Update Transaction**: Implement `updateTransaction()` to modify existing transactions.
    - **Delete Transaction**: Implement `deleteTransaction()` to remove transactions.
    - **Financial Summary**: Implement `getSummary()` to show total income, expenses, and category-wise breakdown.
    - **Logout**: Implement `logout()` to clear the JWT token from `localStorage` and navigate back to the signin page.