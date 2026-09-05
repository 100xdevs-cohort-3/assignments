import { useEffect, useRef, useState } from 'react';
import { calculateTime, formatTime } from '../utils/auxiliaryFunctions';
import styles from './Timer.module.css';
const fields = ['hours', 'minutes', 'seconds'];
export default function Timer() {
  const [time, setTime] = useState(300);
  const [initialTime, setInitialTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(formatTime(300));
  const [finished, setFinished] = useState(false);
  const deadline = useRef(0);
  const inputs = useRef([]);
  useEffect(() => {
    if (!isRunning) return;
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
      setTime(remaining);
      if (!remaining) {
        setIsRunning(false);
        setFinished(true);
      }
    };
    const interval = setInterval(tick, 100);
    return () => clearInterval(interval);
  }, [isRunning]);
  function handleEditField() {
    if (!editing) setDraft(formatTime(time));
    setEditing(true);
    setIsRunning(false);
    setFinished(false);
  }
  function change(field, value, index) {
    const digits = value.replace(/\D/g, '').slice(0, 2);
    const normalized = String(Math.min(field === 'hours' ? 99 : 59, Number(digits)));
    const next = {
      ...draft,
      [field]: digits === '' ? '' : digits.length < 2 ? digits : normalized.padStart(2, '0'),
    };
    setDraft(next);
    const seconds = calculateTime(next.hours || '0', next.minutes || '0', next.seconds || '0');
    setTime(seconds);
    setInitialTime(seconds);
    if (digits.length === 2 && index < 2) {
      inputs.current[index + 1].focus();
      inputs.current[index + 1].select();
    }
  }
  function toggle() {
    setEditing(false);
    if (isRunning) setIsRunning(false);
    else if (time > 0) {
      deadline.current = Date.now() + time * 1000;
      setIsRunning(true);
      setFinished(false);
    }
  }
  const display = formatTime(time);
  return (
    <section className={'card ' + styles.timer}>
      <h2>Focus timer</h2>
      <div
        className={styles.ring}
        style={{ '--progress': (initialTime ? (time / initialTime) * 360 : 0) + 'deg' }}
      >
        <div className={styles.clock} role="timer" aria-label="Time remaining">
          {display.hours}:{display.minutes}:{display.seconds}
        </div>
      </div>
      <fieldset
        className={styles.fields}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setEditing(false);
        }}
      >
        <legend>Edit duration</legend>
        {fields.map((field, index) => (
          <label key={field}>
            {field}
            <input
              ref={(element) => {
                inputs.current[index] = element;
              }}
              inputMode="numeric"
              maxLength={2}
              aria-label={field}
              value={(editing ? draft : display)[field]}
              onFocus={(event) => {
                handleEditField();
                event.target.select();
              }}
              onChange={(event) => change(field, event.target.value, index)}
            />
          </label>
        ))}
      </fieldset>
      <div className={styles.actions}>
        <button onClick={toggle} disabled={!time}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className="secondary"
          onClick={() => {
            setIsRunning(false);
            setTime(initialTime);
            setEditing(false);
            setFinished(false);
          }}
        >
          Reset
        </button>
      </div>
      <p role="status">
        {finished
          ? 'Time is up. Take a breath.'
          : isRunning
            ? 'Focus session in progress.'
            : 'Set your time, then press Start.'}
      </p>
    </section>
  );
}
