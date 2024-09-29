// firstly, Don't get overwhelmed and if you are then go with client-easy.
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import UpdateCourse from "./components/UpdateCourse"

import UserLogin from "./components/UserLogin"
import UserRegister from "./components/UserRegister"
import UserDashBoard from "./components/UserDashboard"
import PurchasedCourses from "./components/PurchasedCourses"

import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/signup" element={<Register />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admindashboard" element={<Dashboard />} />
      <Route path="/updatecourse/:id" element={<UpdateCourse />} />

      <Route path="/user/signup" element={<UserRegister />} />      
      <Route path="/user/login" element={<UserLogin />} />      
      <Route path="/userdashboard" element={<UserDashBoard />} />      
      <Route path="/purchasedcourses" element={<PurchasedCourses />} />      

    </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  )
}

export default App
