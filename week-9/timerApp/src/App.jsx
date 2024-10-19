import { useEffect, useRef, useState } from "react";
import "./App.css";
function App() { 
  const [time, setTime] = useState(100)
  const containerStyle = {
    
  }
  return (
    <>
      <div className="container" style={containerStyle}>
        <div className="timeHolder">
          
        </div>
        <div className="options">
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
