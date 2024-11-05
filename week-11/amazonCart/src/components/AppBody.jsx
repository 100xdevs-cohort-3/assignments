import React from 'react'
import ShoppingCart from './ShoppingCart'
import OrderSummary from './OrderSummary'
export default function AppBody(){

    return (
      <div style={{display:"flex", alignItems:"flex-start"}}>
        <ShoppingCart/>
        <OrderSummary/>
      </div>
    )
  }
