import { CircleCheckBig } from "lucide-react";
import React from "react";

const Modal = ({ amount, closeHandler }) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0, 0.2)",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "40%",
          width: "30%",
          backgroundColor: "white",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 25 }}>Purchase Successful!</p>
        <CircleCheckBig
          style={{ width: "100%", textAlign: "center" }}
          size={48}
          color="green"
        />
        <p style={{ textAlign: "center" }}>
          Thank you for purchase. Your order hase been successfully processed.
        </p>
        <p style={{ fontWeight: "bold" }}>Total Amount: ₹{amount}</p>

        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: 15,
            padding: 8,
          }}
          onClick={closeHandler}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
