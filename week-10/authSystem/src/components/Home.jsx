import React, { useContext } from "react";
import { userContext } from "../context/AuthContext";

const Home = () => {
  const { isContextOn, setIsContextOn } = useContext(userContext);

  return (
    <div>
      <div>
        <div
          style={{
            padding: 10,
            backgroundColor: "whitesmoke",
            fontSize: 15,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 5,
          }}
        >
          <input
            type="checkbox"
            id="toggleContext"
            defaultChecked={isContextOn}
            onChange={() => setIsContextOn(!isContextOn)}
          />
          <label htmlFor="toggleContext">
            Use Context Api: {isContextOn ? "On" : "Off"}
          </label>
        </div>
      </div>
      <div style={{ marginLeft: 30 }}>
        <h1>Auth System Demo</h1>
        <div>
          This demo showcases two approaches to managing authentication state in
          React:
          <ul style={{ listStyle: "inside" }}>
            <li>State lifting</li>
            <li>Context API</li>
          </ul>
          Use the toggle above to switch betweent the two approaches.
        </div>
      </div>
    </div>
  );
};

export default Home;
