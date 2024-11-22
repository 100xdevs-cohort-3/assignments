import './App.css'

function App() {
  return (
    <div>
      <b>
        hii there
      </b>
      <Counter></Counter>  
    </div>
  )
}



//define the counter compomenet
function Counter(){
  
  return <div>
    <h1>1</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App
