import React from 'react'
import "./Header.css";
const Header = ({ message }) => {
  return (
    <div className='header'>{message}</div>
  )
}

export default Header