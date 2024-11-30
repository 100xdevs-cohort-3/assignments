import React ,{Fragment,useEffect}  from "react";

const App=()=>{
  return (
    <>
     <div>hii there</div>
     <div>hello</div>
    </>
  )
}
//both are same
const App1=()=>{
    return (
      <Fragment>
       <div>hii there</div>
       <div>hello</div>
      </Fragment>
    )
  }
  

export default App;