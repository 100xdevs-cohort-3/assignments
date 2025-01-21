import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (editState && editState.value.length === 2) {
      handleEditField(editState.field);
    }
  }, [editState]);

  function handleEditField(field) {
    if (editState && editState.field === field) {
      const newTime = {
        ...formatTime(time),
        [field]: editState.value.toString().padStart(2, "0"),
      };

      const calculatedTime = calculateTime(
        newTime.hours,
        newTime.minutes,
        newTime.seconds
      );

      setTime(calculatedTime);

      if (editState.value.length === 2) {
        setEditState((prevState) => {
          if (prevState.field === "seconds") {
            return null;
          }

          return {
            field: prevState.field === "hours" ? "minutes" : "seconds",
            value: 0,
          };
        });
      } else {
        setEditState(null);
      }
    } else {
      setIsRunning(false);

      setEditState({
        field,
        value: 0,
      });
    }
  }

  function calculateTime(hours, minutes, seconds) {
    const parsedHours = parseInt(hours);
    const parsedMinutes = parseInt(minutes);
    const parsedSeconds = parseInt(seconds);

    if (isNaN(parsedHours) || isNaN(parsedMinutes) || isNaN(parsedSeconds)) {
      return 0;
    }

    return parsedHours * 3600 + parsedMinutes * 60 + parsedSeconds;
  }

  function formatTime(time) {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    time = time % 3600;
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    time = time % 60;
    const seconds = time.toString().padStart(2, "0");

    return { hours, minutes, seconds };
  }

  function handleInputChange(e) {
    setEditState({ ...editState, value: e.target.value });
  }

  return (
    <div className={styles.timerApp}>
      <div className={styles.timerDisplay}>
        <div className={styles.timerCircle}>
          {Object.entries(formatTime(time)).map((field, index) => {
            if (editState && editState.field === field[0]) {
              return (
                <Fragment key={index}>
                  <input
                    id={field}
                    className={styles.timeInput}
                    type="text"
                    defaultValue={field[1]}
                    onChange={handleInputChange}
                    onClick={() => handleEditField(field[0])}
                    autoFocus
                  />
                  {index < 2 && <span className={styles.timerTime}>:</span>}
                </Fragment>
              );
            }
            return (
              <span
                key={index}
                className={`${styles.timerTime} ${styles.timeUnit}`}
                onClick={() => handleEditField(field[0])}
              >
                {field[1]}
                {index < 2 && <span className={styles.timerTime}>:</span>}
              </span>
            );
          })}
        </div>
      </div>

      <div className={styles.actionButtons}>
        {isRunning ? (
          <button
            className={styles.actionButton}
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
        ) : (
          <button
            className={styles.actionButton}
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>
        )}
        <button className={styles.actionButton} onClick={() => setTime(1200)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
