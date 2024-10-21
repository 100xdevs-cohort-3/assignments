const express=require("express");

const app = express()


//route handler when control reaches to '/' then funtion(req,res) run and do the job  --same as readFile 
app.get('/', function (req, res) {
  res.send('Hello World')  //response with this when function is called(send back with this data)
})

app.post('/add', function (req, res) {
    res.send('Hello from the asd endpoint')
})

app.get('/asd', function (req, res) {
    res.send("<b>Hello from the post endpoint</b>")
})
  


//this ensure that the process runs infinitly
app.listen(3000)  //which port we want to listen