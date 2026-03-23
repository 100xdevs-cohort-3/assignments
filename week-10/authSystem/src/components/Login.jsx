import React from 'react'

const Login = () => {
  return (
    <div>
      <form action="/login">
      <input type="text" placeholder='username' onChange={(e)=> e.preventDefault}/>
      <input type="password" placeholder='password' onChange={(e)=> e.preventDefault} />
      
      </form>
    </div>
  )
}

export default Login