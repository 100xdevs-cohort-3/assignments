import { Button } from './components/Buttons.jsx'
import { Input } from './components/Input.jsx'
import './App.css'

function App() {
  return (
    <>
    <div className='h-screen bg-blue-700 flex flex-col justify-center items-center space-y-6'>
    <div className="text-center">
      <h1 className="text-white text-3xl font-semibold mb-2 space-y-6">Webinar.gg</h1>
      <br /><br /><br />

      <p className="text-white text-lg">Verify Your Identity</p>
      <br />
      <p className="text-gray-300 text-sm mt-4">
          Please Enter your Username. 
        </p>
        <br />
      <Input type="text" placeholder={"Username" }/>
      <br /><br />
      <Button disabled={false}>Sign up</Button>
      </div>
      
    </div>
    </>
  )
}

export default App
