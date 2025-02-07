/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request: username and password in the headers.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login


  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

  const express = require('express')
  const app = express();
  const fs = require('fs');
  const path = require('path');
  const bodyParser = require('body-parser');

  app.use(bodyParser.json());

  const mkdir = '/Users/anshgupta/Desktop/assignments/week-4';

  let users;
  try {
    const data = fs.readFileSync(path.join(mkdir, 'authorization.json'), 'utf-8');
    users = data? JSON.parse(data) : [];
  }
  catch(err) {
    console.error("Error in reading the file: " +err);
  }

  app.post('/signup', (req, res) => {
    const {firstName, lastName, userName, password} = req.body;
     const findUser = users.find((user) => {
        return user.userName === userName;
     });

     if(!firstName || !lastName || !userName || !password) res.status(400).json({message: "All fields are required."});

     else if(findUser) res.status(400).json({message: 'bad request'});

     else {
        const user = {
            id: Math.floor(Math.random()*1000),
            firstName,
            lastName,
            userName,
            password
        }
        users.push(user);
        fs.writeFile(path.join(mkdir, 'authorization.json'), JSON.stringify(users), (err) => {
            if(err) {
                console.error("Error writing to file: " +err);
                res.status(400).json({message: "Error writing to file."});
            }
        })
        res.status(201).json({message: 'successful'});
     }
  })

  app.post('/login', (req, res) => {
    const userName = req.headers.username;
    const password = req.headers.password;
    const index = users.findIndex((user) => {
        return user.userName === userName && user.password === password;
    });
    if(index === -1) res.status(400).json({message: 'User does not exist'});
    else {
        const userDetails = {
            id: users[index].id,
            firstName: users[index].firstName,
            lastName: users[index].lastName
        }
        res.status(201).json(userDetails);
    }
  });

  app.use((req, res) => {
    res.status(404).json({message: 'Unauthorized request'});
  })

  app.listen(3000, () => {
    console.log('authentication server is listening on port 3000');
  });