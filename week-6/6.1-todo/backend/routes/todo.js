let todos = [];  // in memory
let currentId = 1;

export async function getAllTodo(req,res,next){
    res.json(todos);
}

export async function createTodo(req,res,next){
    const {task} = req.body;
    if(!task){
        return res.status(400).json({
            error: "Task is required"
        })
    }
    const newTodo = {id: currentId++, task};
    todos.push(newTodo);
    res.status(201).json(newTodo);
}

export async function updateTodo(req,res,next){
    const { id } = req.params;
    const { task } = req.body;

    if(!task){
        return res.status(400).json({
            error: "Task is required"
        })
    }

    const todoIndex = todos.findIndex( todo => todo.id == id);
    if(todoIndex !==-1){
        todos[todoIndex] = { ...todos[todoIndex],task};
        res.json(todos[todoIndex]);
    }else{
        res.status(404).json({
            message: "Todo not found"
        })
    }
}

    
export async function deleteTodoById(req,res,next){
    const { id } = req.params;

    const todoIndex = todos.findIndex(todo => todo.id == id);
    if(todoIndex != -1){
        todos.splice(todoIndex,1);
        res.status(200).json({
            message: "Todo delete succesfully"
        })
    }else{
        res.status(404).json({
            message: "Todo item not found"
        })
    }

}

export async function searchTodo(req,res,next){
     const { q } = req.query;
     if(!q) {
        return res.status(400).json({
            message: "Query parameters are missing"
        })
     }

     const filterTodo = todos.filter(todo =>
        todo.task.toLowerCase().includes(q.toLowerCase())
     );
     res.json(filterTodo);
}