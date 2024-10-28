import React from 'react'

import CartIcon from './CartIcon'
const AppBar = () => {
  return (
    <div style={{display:"flex",color:"white",backgroundColor:"rgb(16, 24, 39)", height:"15%",width:"100%", alignItems:"center"}}>
      <div style={{ fontSize:"3.5rem" ,marginLeft:10}}>
        amazon.in
      </div>
      <CartIcon/>
    </div>
  )
}



export default AppBar
