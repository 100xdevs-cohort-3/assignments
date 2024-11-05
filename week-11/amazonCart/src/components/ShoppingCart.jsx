import { useRecoilState, useSetRecoilState } from "recoil";
import { Item } from "./Item";
import { itemCollectionAtom } from "../recoil/atoms/shoppingCartAtoms";
import { orderTotalAtom } from "../recoil/atoms/orderSummaryAtoms";
import generateUniqueId from "../utils/uuid_generator";
export default function ShoppingCart() {
  const debug=false;
  const [items, setItems] = useRecoilState(itemCollectionAtom);
  const setOrderTotal = useSetRecoilState(orderTotalAtom);
  function addItem() {
    setItems((prev) => [
      ...prev,
      {
        title: "The Art of impossible: A Peak Performance Primer",
        price: 100,
        id: generateUniqueId(),
      },
    ]);
    setOrderTotal((prev) => {
      let curr = { ...prev };
      curr.quantity += 1;
      let n = items.length;

      curr.subtotal += 100;
      return curr;
    });
  } // this is just a dummy function to check the functionality of shopping cart.The actual function which matters is in WishList.jsx

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "65%",
        marginTop: "50px",
        fontSize: "2rem",
        fontWeight: "600",
        padding: 10,
        marginLeft: "1rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        marginRight: 10,
        boxShadow:"0 4px 8px #C0C0C0"
      }}
    >
      <h3 style={{ margin: 0 }}>Shopping Cart</h3>

      {items.map((el, idx) => {
        return (
          <Item
            identifier={el.id}
            key={idx}
            title={el.title}
            price={el.price}
          />
        );
      })}
      {debug&&<button onClick={addItem}>Add</button>}
    </div>
  );
}
