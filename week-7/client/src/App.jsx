// firstly, Don't get overwhelmed and if you are then go with client-easy.
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import UpdateCourse from "./components/UpdateCourse"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminsignup" element={<Register />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/admindashboard" element={<Dashboard />} />
      <Route path="/updatecourse/:id" element={<UpdateCourse />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
