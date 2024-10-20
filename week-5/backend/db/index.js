const fs = require("fs/promises")
const path = require("path")
async function loadData(){
    let data = await fs.readFile(path.join(__dirname, "../../data.json"), "utf-8");
    data = JSON.parse(data);
    return data;
}

async function saveData(newData){
    await fs.writeFile(path.join(__dirname, "../../data.json"), JSON.stringify(newData));
}

async function addUser(username, password){
    let data = await loadData();
    data[username] = {
        password : password
    };

    await saveData(data);
}

async function addTodo(username, newTodo){
    let data = await loadData();
    if(!data[username].todos){
        data[username].todos = [];
    }
    data[username].todos.push(newTodo);

    await saveData(data);
}

async function removeTodo(username, idx){
    let data = await loadData();
    data[username].todos = data[username].todos.filter((el,index)=>{
        return idx!==index;
    })
    await saveData(data);
}

async function updateTodo(username, idx, newTodo){
    let data = await loadData();
    data[username].todos = data[username].todos.map((el,index)=>{
        if(idx === index){
            return newTodo;
        }
        return el;
        
    })
    await saveData(data);
}

module.exports = {addUser, loadData, addTodo, removeTodo, updateTodo}