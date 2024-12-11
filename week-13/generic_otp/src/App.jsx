import './App.css'
import { Generic_Otp } from './components/Generic_Otp.jsx'
import { Button } from './components/Buttons.jsx'

function App() {
  
  return (
    <div className='h-screen bg-blue-700 '>
      <br /><br /><br /><br />
      <Generic_Otp number={10}/>

    </div>
  )
}

export default App






