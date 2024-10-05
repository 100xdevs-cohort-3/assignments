const express = require('express')
const app = express();
const auth = require('./middleware-assignment/auth')
const jwt = require('jsonwebtoken')
app.use(express.json())

const JWT_SECRET = `MY_SUPER_SECRET`

const users = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/signup', (req, res) =>{
    //input validations usign Zod
    const {username, password} = req.body;
    let user = null;
    user = users.find((user) => user.username == username)
    if(user){
        return res.json({
            message : `User already Exists`
        })
    }
    
    users.push({
        username,
        password,
    })

    res.json({
        message :`You are signed up!`
    })
    console.log(users)
})
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }
app.post('/signin', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(users)
    const user = users.find(user => user.username == username && user.password == password);
    console.log(user)
    if(!user){
       return res.status(403).send({
            message: "Invalid username or password"
        })
    }

    // const token = generateToken();
    const token = jwt.sign({
        username
    },JWT_SECRET)
    user.token = token;
    res.send({
        token
    })
})


app.get('/me',auth, (req, res)=>{
    // they will send me their token in the headers
    const user = req.user
    res.status(200).send(user)
})

app.listen(3000, () => {
    console.log(`Server Started`)
})