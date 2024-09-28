//  implement the home page UI here.
import React from 'react'

// compoents imports
import Login from '../components/Login'
import Register from '../components/Register'
import Courses from '../components/Courses'

const Home = () => {
  return (
    //  write home page UI code here
    <div>
      <h1>Home</h1>
      <Register />
    </div>
  )
}

export default Home