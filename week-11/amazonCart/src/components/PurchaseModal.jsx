import React from "react";
import checkMark from "../assets/check-mark.png";
import {useRecoilValue, useSetRecoilState} from "recoil"
import { modalAtom } from "../recoil/atoms/modalAtom";
import { orderTotalAtom } from "../recoil/atoms/orderSummaryAtoms";
const PurchaseModal = () => {
  const setShowModal = useSetRecoilState(modalAtom);
  const summary = useRecoilValue(orderTotalAtom);
  function closeModal(){
    setShowModal(false)
  }
  return (
    
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "30rem",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          position:"fixed",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)",
          zIndex:20
        }}
      >
        <h2>Purchase Successful!</h2>
        <div style={{ textAlign: "center" }}>
          <img
            src={checkMark}
            alt="Not found"
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: 10, fontWeight: 100 }}>
          Thank you for your purchase.Your order has been successfully
          processed.
        </div>
        <div style={{ marginTop: 20 }}>
          <b>Total Amount: Rs.{summary.subtotal}</b>
        </div>
        <button
          style={{
            marginTop: 20,
            backgroundColor: "#2463EB",
            color: "white",
            border: 0,
            padding: 10,
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
  );
};

export default PurchaseModal;
