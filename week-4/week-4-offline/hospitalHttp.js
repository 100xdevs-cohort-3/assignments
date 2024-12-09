const express=require("express");

const app=express();

const users=[{   //array of an objects
    name:"John",
    kidneys:[{   //array of an objects
        healthy:false  
    }]
}];


app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys= johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys +=1;
        }
    }
    const numberOfUnHealthyKidneys= numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.post("/",function(req,res){   //get back the data
    const isHealthy =req.body.isHealthy;    //increasing the no of kidney in backend when i run postman
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!!!"

    })
    
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({

    })
})

//removing all the unhealthy kidneys
app.delete("/",function(req,res){
    //you should return a 411
    //only if atleast one unhealthy kidney is there do this,else return 411
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
           }
        }
        users[0].kidneys=newKidneys;
         res.json({msg:"doneeee"})
    }else{
        res.status(411).json({
            msg:"You have no bad kidney"
        });
    }
      
})


function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3002);