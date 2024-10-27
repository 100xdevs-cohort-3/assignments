import React,{useState} from 'react'
import {useRecoilValue} from "recoil"
import { itemCollectionAtom } from '../recoil/atoms/shoppingCartAtoms'
import { orderTotalAtom } from '../recoil/atoms/orderSummaryAtoms'
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

function CartIcon(){
  // const [count,setCount] = useState(2)
    // const items = useRecoilValue(itemCollectionAtom)
    const summary  = useRecoilValue(orderTotalAtom);
      return(
        <div style={{display:"flex",marginLeft:"auto", fontSize:"2rem", padding:15}}>
          {/* <div style={{fontSize:"2rem"}}>Hello, User!</div> */}
          Hello,user!
          <i className="fa-solid fa-cart-shopping" style={{color:"white",marginLeft:10}}></i>
          <div style={{borderRadius:"50%", height:"1.5rem",width:"1.5rem",backgroundColor:"#F97315",color:"white", margin:-10,marginLeft:-13,fontSize:"1.1rem",textAlign:"center"}}>
            {summary.quantity}
          </div>
        </div>
      )


}

export default AppBar
