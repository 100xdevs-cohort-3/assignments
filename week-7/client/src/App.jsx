// firstly, Don't get overwhelmed and if you are then go with client-easy.
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./components/Register"
import Login from "./components/Login"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminsignup" element={<Register />} />
      <Route path="/adminlogin" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
