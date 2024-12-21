import React from "react";

//inthis console dont give any warning 
const App =()=>{

  //give a key
    return (
      <div>
       {[
        <Todo key={1} title={"go tp gym"} done={false}/>,
        <Todo key={2} title={"Eat food"} done={true}/>
       ]}
      </div>
    );
};


  function Todo({title,done}){
    return <div>
      {title } - {done ? "Done": "Not done!"}
    </div>
  }

  



export default App;