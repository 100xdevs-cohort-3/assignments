import './App.css'


function App() {

  

  return (
    <div className="h-screen bg white dark:bg-blue-800  text-black dark:text-white" >
      <button onClick={()=>{
        document.querySelector("html").classList.toggle("dark")
      }}>Toggle theme</button>
      <div className='text-2xl dark:text-red-200 text-blue-200'>
        hiii there
      </div>

    </div>
   
  )
}

export default App
