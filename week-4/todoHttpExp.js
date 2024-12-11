const ecpress=require("express");
const app=express()


//let todos=[];

let users={
    1: {
        todos:[]
    },
    2: {
        todos:[]
    }
}

app.post('/',function(req,res){
    todos.push({
        title,
        id
    })
})

app.delete('/',function(req,res){
    //extreact the todo id
    //remove the todo from here
})

app.get('/',function(req,res){
    res.json({

    })
})