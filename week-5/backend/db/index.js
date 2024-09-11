//  start writing from here
const jwt=require('jsonwebtoken');

let users=[];


const generateJWT=(username)=>{
    // const userame=req.body.username;
    const token=jwt.sign({username:username},process.env.JWT_SECRET)
    return token;
}



const signup=(req,res)=>{
    const user={
        username:req.body.username,
        password:req.body.password,
        todosCount:0,
        todos:[]
    };
    if(!user.username||!user.password){
        return res.status(403).send({message:"User Details required"});
    }

    for(let i=0;i<users.length;i++)
    {
        if(user.username===users[i].username&&user.password===users[i].password){
            return res.status(400).send({message:"User already exists"})
        }
    }

    users.push(user);
    const token=generateJWT(user.username);
    return res
    .status(201)
    .send({
        token,
        message:"User signed up successfully"
    })

}

const signin=(req,res)=>{
    const user={username:req.body.username,password:req.body.password};
    if(!user.username||!user.password){
        return res.status(403).send({message:"User Details required"});
    }

    for(let i=0;i<users.length;i++)
    {
        if(user.username===users[i].username&&user.password===users[i].password){
            const token=generateJWT(user.username);
            return res
            .status(201)
            .send({
                token,
                message:"User signed in successfully"
            })
        }
    }

    return res
    .status(404)
    .send({
        message:"User doesn't exist"
    })
}

const logout=(req,res)=>{

}



//TODOs list/create/delete/update/done marking

const allTodos=(req,res)=>{
    if(!username){
        return res.status(400).send({message:"User required"});
    }
    for(let i=0;i<users.length;i++)
    {
        if(username===users[i].username&&token===users[i].token){
            return res.status(200).send({todos:users[i].todos,todosCount});
        }
    }

    return res.status(404).send({message:"Invalid user"});
}

const createTodo=(req,res)=>{
    if(!username||!req.body.todo){
        return res.status(400).send({message:"Details required"});
    }
    for(let i=0;i<users.length;i++)
    {
        if(username===users[i].username&&token===users[i].token){
            todosCount=req.body.todo.id;
            users[i].todos.push(req.body.todo);
            return res.status(201).send({message:"Todo created successfully"});
        }
    }

    return res.status(404).send({message:"Invalid user"});

}

const deleteTodo=(req,res)=>{
    //validate the details from req
    //search for user
    //search for todo
    //delete the todo
    //Didn't find the user

    if(!username||!req.body.todo){
        return res.status(400).send({message:"Details required"});
    }
    for(let i=0;i<users.length;i++)
    {
        if(username===users[i].username&&token===users[i].token){
            for(let j=0;j<users[i].todos.length;j++)
            {
                if(users[i].todos[j].id===req.body.todo.id){
                    delete users[i].todos[j];
                    return res.status(200).send({message:"Todo deleted successfully"});
                }
            }
            return res.status(404).send({message:"Todo not found"});
        }
    }

    return res.status(404).send({message:"Invalid user"});

}

const completeTodo=(req,res)=>{
    //validate the details
    //find the user
    //find the todo
    //mark todo as completed
    
    if(!username||!req.body.todo){
        return res.status(400).send({message:"Details required"});
    }
    for(let i=0;i<users.length;i++)
    {
        if(username===users[i].username&&token===users[i].token){
            for(let j=0;j<users[i].todos.length;j++)
            {
                if(users[i].todos[j].id===req.body.todo.id){
                    users[i].todos[j].completed=1;
                    return res.status(200).send({message:"Todo marked as done successfully"});
                }
            }
            return res.status(404).send({message:"Todo not found"});
        }
    }

    return res.status(404).send({message:"Invalid user"});
}

const updateTodo=(req,res)=>{
    if(!username||!req.body.todo){
        return res.status(400).send({message:"Details required"});
    }
    for(let i=0;i<users.length;i++)
    {
        if(username===users[i].username&&token===users[i].token){
            for(let j=0;j<users[i].todos.length;j++)
            {
                if(users[i].todos[j].id===req.body.todo.id){
                    users[i].todos[j]=req.body.todo;
                    return res.status(200).send({message:"Todo updated successfully"});
                }
            }
            return res.status(404).send({message:"Todo not found"});
        }
    }

    return res.status(404).send({message:"Invalid user"});
}

module.exports={
    signup,
    signin,
    logout,
    allTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    completeTodo
};