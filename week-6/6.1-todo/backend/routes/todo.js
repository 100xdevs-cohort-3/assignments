let todos = []; // in memory space
let count = 0;
let deletedTodos = [];

async function getAllTodo (req, res, next){          // to get all your todos history
    //  write here
    res.json({
        todos,
        deletedTodos
    });
    
}

async function createTodo (req, res, next){
    //  write here
    const todo = req.body.todo;
    count++;
    if(todo){
        todos.push({
            id : count,
            todo : todo
        });
        res.json({
            message : "todo create successfully...."
        })
    }else {
        res.status(400).json({
            message : "unable to get the todo..."
        });
    }
    
}

async function updateTodo (req, res, next){
    //  write here
    const id = parseInt(req.params.id);
    const updatedTodo = req.body.todo;
    if (id && updatedTodo){
        let foundTodo = null;
        for (let i=0; i<todos.length; i++){
            if (todos[i].id === id){
                foundTodo = todos[i];
                todos[i].todo = updatedTodo;
            }
        }
        if (foundTodo){
            res.json({
                message : "updated successfully...."
            })
        }else {
            res.json({
                message : "can't get your previous data...."
            })
        }
    }else {
        res.json({
            message : "Something went wrong while receiving your data..."
        })
    }

}

async function deleteTodo (req, res, next){      // to delete all your todos history
    //  write here
    todos.splice(0,todos.length);
    deletedTodos.splice(0 , deletedTodos.length);
    res.json({
        message : "you have deleted all the todos..."
    })
}

async function deleteTodoById (req, res, next){
    //  write here
    const id = parseInt(req.params.id);
    if (id){
        for (let i=0; i<todos.length; i++){
            if(todos[i].id === id){
                const arr = todos.splice(i,1);
                deletedTodos.push(arr[0]);
            }
        }
        res.json({
            message : "delete successfully..."
        });
    }else {
        res.json({
            message : "unable to get the id..."
        });
    }
    
}




async function searchTodo (req , res , next){
    const todo = req.body.todo;
    if (todo){
        let getTodo = null;
        for (let i=0; i<todos.length; i++){
            if(todos[i].todo === todo){
                getTodo = todos[i];
                break;
            }
        }
        if(getTodo){
            res.json({
                searchedTodo : getTodo
            })
        }else {
            res.json ({
                message : "can't get your todo..."
            });
        }
    }else {
        res.json ({
            message : "Something went wrong while receiving your data..."
        });
    }
}



module.exports = {
    deleteTodoById ,
    deleteTodo ,
    updateTodo ,
    createTodo ,
    getAllTodo ,
    searchTodo
};