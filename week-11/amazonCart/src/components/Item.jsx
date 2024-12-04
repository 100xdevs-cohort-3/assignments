import React from "react"
import {useRecoilState, useSetRecoilState} from "recoil"
import { itemCounterAtom } from "../recoil/atoms/itemAtoms";
import { orderTotalAtom } from "../recoil/atoms/orderSummaryAtoms";
import { itemCollectionAtom } from "../recoil/atoms/shoppingCartAtoms";
import { wishListItemStatusAtom } from "../recoil/atoms/wishlistAtoms";
export const Item = React.memo(function Item({identifier, title, price}){ 
    
    
    const[count,setCount] = useRecoilState(itemCounterAtom(identifier));
    const setOrderTotal = useSetRecoilState(orderTotalAtom);
    
    const setItems = useSetRecoilState(itemCollectionAtom)
    
    const setAdded = useSetRecoilState(wishListItemStatusAtom(identifier));

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
      setAdded(false);
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