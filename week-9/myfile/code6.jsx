import {useState,useEffect} from "react";


function App(){
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);

function increase(){
  setCount(c=>c+1);
}


function decrease(){
  setCount2(c=>c-1);
}

  return <div>
    <Counter count={count} count2={count2}/>
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>

}


function Counter(props){

//mounting works only in this case empty da
  useEffect(function(){

    //mounting
    console.log("Mount");

    //CLEANUP (runs at last not evrytime)
    return function(){
      console.log("unmount");
    }

  },[]);

  useEffect(function(){
    //first run once 
    console.log("Count the chnaged");


    //first time it will not run after that it will run everytime
    return function(){
      console.log("cleanup inside second effect");
    }

  },[props.count])


  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2} <br />
  </div>

}


export default App;