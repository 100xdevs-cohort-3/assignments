import React, { useState } from "react";

function Checkbox({ useContextAPI, setUseContextAPI }) {
  function handleCheckBoxChange() {
    setUseContextAPI(!useContextAPI);
  }
  return (
    <>
      <div className="checkbox-bar">
        <input
          id="checkbox"
          type="checkbox"
          className="checkbox"
          checked={useContextAPI}
          onChange={handleCheckBoxChange}
        />
        <label htmlFor="checkbox">
          <h2>Context API ON</h2>
        </label>
      </div>
    </>
  );
}

export default Checkbox;
