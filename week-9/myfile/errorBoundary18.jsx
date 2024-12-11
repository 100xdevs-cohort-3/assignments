import {useState,useEffect} from "react";
import React from "react";

const App=()=>{
  return (
    <div>
      <ErrorBoundary>
        <Card1/>
      </ErrorBoundary>
      <ErrorBoundary> 
        <Card2/>
      </ErrorBoundary>
    </div>
  )
}

function Card1(){

  throw new Error("Error while rendering");
  return  <div style={{background: "red",  boraderRadius:10, margin:10,padding:10}}>
     hiii theree
  </div>
  
}


function Card2(){

  throw new Error("Error while rendering");
  return  <div style={{background: "red",  boraderRadius:10,margin:10,padding:10}}>
     HELLLO
  </div>
  

}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{background: "red",  boraderRadius:10,margin:10,padding:10}}>
                <h1>Something went wrong.</h1>
              </div>
        }

        return this.props.children; 
    }
}

export default App;