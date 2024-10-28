import React from 'react'
import ShoppingCart from './ShoppingCart'
import OrderSummary from './OrderSummary'
function AppBody(){

    return (
      <div style={{display:"flex", alignItems:"flex-start"}}>
        <ShoppingCart/>
        <OrderSummary/>
      </div>
    )
  }

export default AppBody
