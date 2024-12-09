import React from "react";

const App =()=>{
  return (
     <div>
       <MyComponent/>
     </div>
  );

};

const componentStyles={backgroundColor: "red",
  color:"white", padding:10,
  borderRadius:20}

function MyComponent(){
  return (
    //pass style as an object
    <div style={componentStyles}>
      Hello world

    </div>
  );

}

export default App;