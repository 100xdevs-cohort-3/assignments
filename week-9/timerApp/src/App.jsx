import Timer from './components/Timer';
import style from "./components/Timer.module.css";

function App() {
  return (
    <>
      <div className={style.splitTextContainer}>
        <span className={`${style.textPart} ${style.left}`}>Timer</span>
        
        <span className={`${style.textPart} ${style.right}`}>-App</span>
      </div>
      <Timer />
    </>
  );
}

export default App;






