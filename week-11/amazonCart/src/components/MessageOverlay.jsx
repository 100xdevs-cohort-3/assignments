import { Info } from "lucide-react";
import React, { cloneElement } from "react";

const MessageOverlay = ({ message }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 5,
        left: 50,
        backgroundColor: "blue",
        color: "white",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Info size={18} />
      {message}
    </div>
  );
};

export default MessageOverlay;
