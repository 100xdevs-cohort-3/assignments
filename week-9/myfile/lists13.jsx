import React from "react";


// gives a warning
const App =()=>{

//list of todos
  const todos=[{
    title:"go tp gym",
    done: false
  },{
    title:"Eat food",
    done:true
  }];


  //map that array of object into array of components
  const todosComponents=todos.map(todo => <Todo title={todo.title} done={todo.done}/>)
    return (
      <div>
       { todosComponents}

      </div>
    );
};


  function Todo({title,done}){
    return <div>
      {title } - {done ? "Done": "Not done!"}
    </div>
  }




export default App;