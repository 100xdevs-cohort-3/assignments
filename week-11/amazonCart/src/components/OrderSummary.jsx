import React from "react";
import { useRecoilValue,useSetRecoilState } from "recoil";
import { orderTotalAtom } from "../recoil/atoms/orderSummaryAtoms";
import { modalAtom } from "../recoil/atoms/modalAtom";
const OrderSummary = () => {
 
  const setShowModal = useSetRecoilState(modalAtom)
  const summary = useRecoilValue(orderTotalAtom);
  let count = summary.quantity;
  let totalQuantity = summary.subtotal;
  function showModal(){
    setShowModal(prev => true)
  }
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        marginLeft: "auto",
        marginTop: "50px",
        padding: 10,
        borderRadius: "10px",
        height: "300px",
        width: "500px",
        maxWidth: "500px",
        marginRight: 20,
        fontSize: "2rem",
        boxShadow:"0 4px 8px #C0C0C0"
      }}
    >
      <h3 style={{ margin: 0 }}>Order Summary</h3>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 400,
            fontSize: "30px",
            margin: 0,
          }}
        >
          <p>Items ({count}):</p>
          <p>&#8377; {totalQuantity}</p>
        </div>
        <hr style={{ margin: 0 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "30px",
            margin: 0,
          }}
        >
          <p>Order Total:</p>
          <p>&#8377; {totalQuantity}</p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", flexGrow: "1" }}
        >
          <button
            onClick={showModal}
            style={{
              width: "100%",
              fontSize: "30px",
              padding: 10,
              fontWeight: "100",
              backgroundColor: "#FACC14",
              border: "0px",
              cursor:"pointer"
            }}
          >
            Proceed To Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
