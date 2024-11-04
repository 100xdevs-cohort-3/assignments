import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

  const hoursRef = useRef();
  const minsRef = useRef();
  const secsRef = useRef();
  const handlePause = () => {};
  const handleReset = () => {};
  const handleStart = () => { 
    hoursRef.current.readOnly = true;
    minsRef.current.readOnly = true;
    secsRef.current.readOnly = true;
    setIsRunning(state=>!state)
  };
  const handleEdit = () => {
    hoursRef.current.readOnly = false;
    minsRef.current.readOnly = false;
    secsRef.current.readOnly = false;
  };
  const handleInputChange = (e) => {
    if (e.target.value.length >= 3) {
      let temp = e.target.value;
      alert("invalid");
      let x = temp.slice(0, 2);
      e.target.value = x;
    }
  };

  const holderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const timeInputStyle = {
    width: "60px",
    height: "60px",
    fontSize: "26px",
    textAlign: "center",
    marginTop: 30,
  };

  const labelStyle = {
    marginTop: "10px",
    fontSize: "20px",
    color: "#fff",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  };
  
  return (
    <div className="app-container">
      <div className="container" style={containerStyle}>
        <div style={{ fontSize: 36, fontWeight: "bold" }}>
          Enter Time to Start Timer
        </div>
        <div className="timeHolder" style={holderStyle}>
          <div className="hours">
            <input
              readOnly={false}
              type="text"
              ref={hoursRef}
              style={timeInputStyle}
              onChange={handleInputChange}
            />
            <p style={labelStyle}>Hours</p>
          </div>
          <div className="mins">
            <input
              type="text"
              ref={minsRef}
              style={timeInputStyle}
              onChange={handleInputChange}
            />
            <p style={labelStyle}>Mins</p>
          </div>
          <div className="secs">
            <input
              type="text"
              ref={secsRef}
              style={timeInputStyle}
              onChange={handleInputChange}
            />
            <p style={labelStyle}>Secs</p>
          </div>
        </div>
        <div className="options">
          {isRunning?<button onClick={handleStart}>{"Pause"}</button>:<button onClick={handleStart}>{"Start"}</button>}
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
