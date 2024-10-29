# React Authentication System: State Lifting vs Context API

## Overview

This project demonstrates two approaches to managing authentication state in a React application, specifically focusing on updating the AppBar with user data after login.

## Objectives

1. Implement AppBar updates using State Lifting
2. Implement AppBar updates using Context API
3. Compare the two approaches

## Problem Statement

Create a React application with the following components:
- Login component
- AppBar component
- Main App component

The goal is to update the AppBar with the user's username after successful login, using two different methods:

1. State Lifting
2. Context API

### Directory Structure Explanation

- `src/`: Root source directory
  - `components/`: Contains reusable React components
    - `AppBar.js`: Application bar component
    - `Login.js`: Login form component
    - `Home.js`: Home page component
  - `context/`: Contains React Context files
    - `AuthContext.js`: Authentication context for the Context API approach
  - `App.js`: Main application component
  - `index.js`: Entry point of the application


## Implementation Approaches

### 1. State Lifting

In this approach:
- The App component (App.js) manages the authentication state (username and login status).
- The Login component (components/Login.js) receives a login function as a prop and calls it upon successful login.
- The App component passes the username to the AppBar component (components/AppBar.js) as a prop.

### 2. Context API

In this approach:
- Create an AuthContext (context/AuthContext.js) to store the authentication state.
- Wrap the main App component (App.js) with an AuthProvider.
- The Login component uses the context to update the auth state.
- The AppBar component uses the context to access and display the username.

## Comparison

### State Lifting
- Pros: Simple, explicit data flow
- Cons: Can lead to prop drilling in larger applications

### Context API
- Pros: Avoids prop drilling, centralizes state management
- Cons: Adds complexity for smaller applications

## Conclusion

This project demonstrates two methods for updating the AppBar component with user data after login. State Lifting is straightforward and works well for smaller applications, while Context API provides a more scalable solution for larger projects with complex state management needs.


### Reference UI:

![Image](https://utfs.io/f/A8JZzw0Laf9jwP5plZUDQN0fkp6bvhZM78nmg2zcWSAPE3eR)





