import React from 'react'
import { useRecoilState,useSetRecoilState } from 'recoil';
import { itemCollectionAtom } from '../recoil/atoms/shoppingCartAtoms';
import { orderTotalAtom } from '../recoil/atoms/orderSummaryAtoms';
import generateUniqueId from '../utils/uuid_generator';
import wishListItemStatusAtom from '../recoil/atoms/wishlistAtoms';
const WishList = () => {
  return (
    <div style={{backgroundColor:"#FFFFFF", minHeight:"100vh"}}>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      <WishItem id={generateUniqueId()}title={"RedDragon k617 fizz Keyboard.Hotswappable-reliable-best-keyboard-in-town."} price={289}/>
      <WishItem id={generateUniqueId()}title={"RedDragon k617 fizz Keyboard.Hotswappable-reliable-best-keyboard-in-town."} price={289}/>

      </div>
    </div>
  )
}

function WishItem({id,title,price}){
  const [added,setAdded] = useRecoilState(wishListItemStatusAtom(id))
  const [items, setItems] = useRecoilState(itemCollectionAtom);
  const setOrderTotal = useSetRecoilState(orderTotalAtom);
  console.log(added)
  function addItem() {
    setItems((prev) => [
      ...prev,
      {
        title: title,
        price: price,
        id: generateUniqueId(),
      },
    ]);
    setAdded(true);
    setOrderTotal((prev) => {
      let curr = { ...prev };
      curr.quantity += 1;
      let n = items.length;

      curr.subtotal += price;
      return curr;
    });
  }
    return(
        <div style={{display:"flex",flexDirection:"column", width:"20rem", margin:10,backgroundColor:"#FFFFFF", borderRadius:"5px",border:"2px solid #E5E5E5",padding:10}}>
            <img src="https://m.media-amazon.com/images/I/71nrjKFmaeL.jpg" alt="Not Found" style={{height:"20rem", width:"20rem"}}/>

            <p>{title}</p>
            <p>Rs.{price}</p>
            <button style={{backgroundColor:"#F9BD23", border:0, borderRadius:5, padding:10, cursor:"pointer"}} onClick={addItem}>{added?"Proceed to checkout":"Add to Cart"}</button>
        </div>
    )
}

export default WishList