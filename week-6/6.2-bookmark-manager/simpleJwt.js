const jwt=require("jsonwebtoken");


//decode ,verify,generate


//generating
const value={
    name:"puja",
    accountNumber:123456
}

//sign(getting the jwt token)
const token=jwt.sign(value,"secret");
console.log(token);

//this token has been generated using this secret ,and hence this token can only be verified using this secret (this is like a chequebook)


//verify
const token1=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHVqYSIsImFjY291bnROdW1iZXIiOjEyMzQ1NiwiaWF0IjoxNzMwMjI0MzgzfQ.GPJj6adJT7aY5IxbzHl7h5aHmVInG1XUHClzHr9CuNI");
console.log(token1);