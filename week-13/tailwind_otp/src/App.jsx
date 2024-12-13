import { Otp } from './components/Otp.jsx'
import { Buttons } from './components/Buttons.jsx'
import './App.css'

function App() {
  
  return (
    <div className='h-screen bg-blue-700 '>
      <br /><br /><br /><br />
      <Otp/>

      <br /><br /><br /><br />
      <Buttons onClick={()=>alert("hii there")}>hi</Buttons>

    </div>
  )
}

export default App
