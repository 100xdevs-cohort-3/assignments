import React ,{createContext, useContext, useState} from "react";


const CountContext=createContext();

function CountContextProvider({children}){
  const [count ,setCount]= useState(0);


  return <CountContext.Provider value={{
    count,
    setCount
  }} >
    {children}

  </CountContext.Provider>
}

function Parent(){
  return <div>
    <CountContextProvider>
      <Increase/>
      <Decrease/>\
      <Value/>
    </CountContextProvider>
  </div>
}


function Decrease(){
  const {setCount}=useContext(CountContext);

  function decrease(){
    setCount(count=>count -1)
  }
  return <div>
    <button onClick={decrease}>Decrease</button> 

    </div>
}


function Increase(){
  const {setCount}=useContext(CountContext);
  return <button onClick={()=>setCount(count =>count +1)}>Increase</button>;
}

function Value(){
  const {count}=useContext(CountContext);
  return <p>Count : {count}</p>
}


//App component
const App=()=>{
  return <div>
    <Parent/>
    </div>
}


export default App;