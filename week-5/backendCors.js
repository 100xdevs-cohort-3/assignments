//Backend
const express =require("express");


//cors middleware
const cors=require("cors")

const app=express();

//if we dont do this then req.body will be undefined
app.use(express.json());
//if u want to allow any domain then do this 
app.use(cors()) 

//if want to restric domain then do this only allow domain mention 
// app.use(cors({
//     domains: ["http://google.com", "https://employee.google.com"]

// }));


//if we want our front and backend host on the same server not cors middleware required
app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/fetchBackCors.html");
})

app.post("/sum",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        answer: a + b,
    })
})

app.listen(3000);


//his frontend is in public folder name fetchBackCors.html
