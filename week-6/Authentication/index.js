const express=require("express")
const jwt=require("jsonwebtoken")
const cors = require('cors')
const app=express()

const JWT_SECRET="tridib11"
const PORT=3000
app.use(express.json()) 




const users=[]
function auth(req, res, next) {
  const token = req.headers.token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      message: "Token is missing. You are not logged in."
    });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
      req.username = decodedData.username;
      next();
    } else {
      res.status(401).json({
        message: "Invalid token. You are not logged in."
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Invalid token. You are not logged in."
    });
  }
}


function logger(req,res,next){
  console.log(req.method+" request came")
  next()
}


app.use(cors())
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})
app.post("/signup",(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  if(users.find(user => user.username === username)){
    return res.status(400).json({
      msg:"User already exists"
    })
  }
  users.push({
    username:username,
    password:password
  })

  res.json({
    msg:"You are signed in successfully"
  })
})

app.post("/signin",(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  if(users.find(user=>user.username===username)){
    const token=jwt.sign({
      username
    },JWT_SECRET)
    res.json({
      token:token
    })
  }else{
    res.json({
      msg:"Sorry user doesnot exists!"
    })
  }
})



app.get("/me",auth,logger,(req,res)=>{
  const user = users.find(user=>user.username===req.username)
  if (user) { 
    return res.json({
      username:user.username,
      password: user.password
    })
  } else {
    return res.status(404).json({
      msg: "User not found"
    })
  }
})

app.listen(PORT,()=>{
  console.log(`Server started at port ${PORT}`)
})