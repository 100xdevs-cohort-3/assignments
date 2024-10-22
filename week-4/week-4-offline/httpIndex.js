const express=require("express");

const app=express();  //creating the instance of express called app

function calculateSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans +=i;
    }
    return ans;
}


//when someone comes '/' this route then the logic is run line 16,17 after that call function (req,res)
app.get("/",function(req,res){
    const n=req.query.n;
    const ans=calculateSum(n);
    res.send("Hey you answer is " + ans);  //responsed
})



//this ensure that the process runs infinitly
app.listen(3000)  //which port we want to listen