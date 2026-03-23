import React,{useState, useEffect} from 'react'
import style from "./Timer.module.css"
import { formatTime,calculateTime } from '../utils/auxiliaryFunction'


const Timer = () => {
 
    //states to manage time, initial time, running status and editing field with values
     
    const [time, setTime] = useState(0); // current time in seconds
    const [initialTime, setInitialTime] = useState(0); // time initially set by the user
    const [isRunning, setIsRunning] = useState(false) // track if the timer is running and paused
    const [editState, setEditState] = useState({field: null, value: ''});  // State for editing field and value

    //effect to update the progress bar as time counts down

    useEffect( () =>{
        const progress = initialTime > 0 ? (time/initialTime) * 100 : 0;
        document.documentElement.style.setProperty('--progress', `${progress}%`);
    },[time,initialTime]);


    //effect to handle timer countdown when it is running
    useEffect(() =>{
      let interval = null;
      if(isRunning && time > 0){
        interval = setInterval(() =>{
          setTime((prevTime)=> prevTime -1 ); // decrease time by 1 second
        },[1000]);
      }else if(time == 0){
        setIsRunning(false); // stop the timer when it reachers 0
      }
      return () => {
        if(interval) clearInterval(interval); // clear interval to prevent memory leaks
      }
    },[isRunning,time])
    
    
// function to handle editing of time fields

const handleEditField = (field)=>{

  if(editState.field === field){
    // edit is completed - save new value with padding and update time

    const newTime = {
      ...formatTime(time),
      [field]: editState.value.padStart(2,'0') // adding leading zeros if necessary
    };

    //use the auxiliary funtion to calculate the total time in seconds

    const calculateTIme = calculateTime(newTime.hours, newTime.minutes, newTime.seconds);

    //update time and initial time with the new calculated value

    setTime(calculateTIme);
    setInitialTime(calculateTIme);

    //reset editing state
    setEditState({field: null, value: ''});
  }else{
    //start editing - remove leading zeros
    setIsRunning(false); // pause the timer while editing
    setEditState({field, value: formatTime(time)[field].replace(/^0+/, '')}); //set field and remove leading zeros for easier editing
  }
};

//handle input changes for editing time fields(allow only numbers)
const handleInputChange = (e) =>{
  const value = e.target.value.replace(/\D/g, '').slice(0,2); // allow only numbers, max 2 digits
  setEditState((prevState) => ({...prevState, value})); // update only the value in editState
};

// foramt current time into hours , minutes and seconds for display
const {hours,minutes, seconds} = formatTime(time);


  return (
  
    <div className={style.timerApp}>
      


      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            {editState.field === 'hours' ? (
              <input
                className={style.timeInput}
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('hours')}
                autoFocus
              />
            ) : (
              <span className={style.timeUnit} onClick={() => handleEditField('hours')}>{hours}</span>
            )}
            :
            {editState.field === 'minutes' ? (
              <input
                className={style.timeInput}
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('minutes')}
                autoFocus
              />
            ) : (
              <span className={style.timeUnit} onClick={() => handleEditField('minutes')}>{minutes}</span>
            )}
            :
            {editState.field === 'seconds' ? (
              <input
                className={style.timeInput}
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('seconds')}
                autoFocus
              />
            ) : (
              <span className={style.timeUnit} onClick={() => handleEditField('seconds')}>{seconds}</span>
            )}
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button className={style.actionButton} onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'} {/* Toggle between Start and Pause */}
        </button>
        <button className={style.actionButton} onClick={() => { setTime(0); setInitialTime(0); setIsRunning(false); }}>
          Reset {/* Reset the timer */}
        </button>
      </div>
    </div>
  );
}

export default Timer
