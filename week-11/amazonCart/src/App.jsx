import React, { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import {RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"
import { itemCounterAtom } from './recoil/atoms/itemAtoms'
import { itemCollectionAtom } from './recoil/atoms/shoppingCartAtoms'
import OrderSummary from "./components/OrderSummary"
import { orderTotalAtom } from './recoil/atoms/orderSummaryAtoms'
import  {v4 as uuidv4 } from 'uuid';

function generateUniqueId() {
  return uuidv4();
}

// Usage example
console.log(generateUniqueId());
function App() {
  return (
    <RecoilRoot>
      <AmazonCart/>
    </RecoilRoot>
  )
}
function AmazonCart(){
    return(<div style={{backgroundColor:"#F3F4F6", minHeight:"100vh"}}>
      <AppBar/>
      <AppBody/>
    </div>)

}

function AppBody(){

  return (
    <div style={{display:"flex", alignItems:"flex-start"}}>
      <ShoppingCart/>
      <OrderSummary/>
    </div>
  )
}
function ShoppingCart(){
  // const [items, setItems] = useState([{title:"The Art of impossible: A Peak Performance Primer"}]);
  // const items = useRecoilValue(itemCollectionAtom);
  // const setItems = useSetRecoilState(itemCollectionAtom);
  const [items, setItems] = useRecoilState(itemCollectionAtom);
  const setOrderTotal = useSetRecoilState(orderTotalAtom);
  function addItem(){
    setItems(prev => [...prev, {title:"The Art of impossible: A Peak Performance Primer", price:100, id:generateUniqueId()}])
    setOrderTotal((prev)=>{
      let curr = {...prev};
      curr.quantity+=1;
      let n = items.length;
      // console.log(items)
      curr.subtotal += 100
      return curr;
    })
  }
  
  return (
    <div style={{backgroundColor:"#FFFFFF",width:"65%",marginTop:"50px",fontSize:"2rem",fontWeight:"600",padding:10,marginLeft:"1rem",borderRadius:"10px",display:"flex",flexDirection:"column",marginRight:10}}>
      <h3 style={{margin:0}}>Shopping Cart</h3>
      {/* <Item/>
      <hr />
      <Item/> */}
      {items.map((el,idx)=>{
        return <Item identifier = {el.id} key={idx} title={el.title} price={el.price}/>
      })}
      <button onClick={addItem}>Add</button>
    </div>
  )
}

const Item = React.memo(function Item({identifier, title, price}){ 
  console.log("identifier : ", identifier);
  // const [count,setCount] = useState(1);
  // const count = useRecoilValue(itemCounterAtom(identifier));//this component has subscribed to counterAtom
  // const setCount = useSetRecoilState(itemCounterAtom(identifier));
  const[count,setCount] = useRecoilState(itemCounterAtom(identifier));
  const setOrderTotal = useSetRecoilState(orderTotalAtom);
  // const items = useRecoilValue(itemCollectionAtom);
  // let price = items[identifier].price;
  const setItems = useSetRecoilState(itemCollectionAtom)
  function increase(){
    setCount(currVal => currVal+1);
    setOrderTotal((prev) => {
      let curr = {...prev};
      curr.subtotal += price;
      curr.quantity += 1;
      return curr;
    })
  }
  function deleteItem(){
    setItems(prev=>prev.filter((el,idx)=>el.id!==identifier));
    setOrderTotal((prev) => {
      return {quantity:prev.quantity-1, subtotal:prev.subtotal-price}

      })
  }
  function decrease(){
    if(count == 1){
      deleteItem();
      return;
    }
    setCount(currVal => currVal-1);
    
    setOrderTotal((prev) => {
      let curr = {...prev};
      curr.subtotal -= price;
      curr.quantity -= 1;
      return curr;d
    })
    
  }
  return (
    
     <div style={{display:"flex",padding:10,fontSize:"2rem",marginBottom:30,marginTop:50}}>
      <img src="" alt="" style={{height:"7.5rem",width:"7.5rem",marginTop:"5px",backgroundColor:"grey"}}/>
      <div>
        <p style={{margin:5,marginTop:0}}>
        {title}
        </p>
        <p style={{color:"green", margin:5}}>
        In Stock
        </p>
        <div style={{fontWeight:400}}>
          <button onClick={increase} style={{marginRight:15 ,marginLeft:5,fontSize:"1.5rem"}}>+</button>
          {count}
          <button onClick={decrease}style={{marginLeft:15,fontSize:"1.5rem",width:"30.02px"}}>-</button>

        </div>
      </div>
    </div>
  )
})


export default App
