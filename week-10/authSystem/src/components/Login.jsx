import { useState } from "react";
import { AuthContext } from "./AuthSystem";
import { useContext } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const { handleLogin } = useContext(AuthContext);
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="text"
        name=""
        id=""
        placeholder="username"
        style={{ padding: "8px" }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        style={{ padding: "8px", background: "#3f98b5", cursor: "pointer" }}
        onClick={() => {
          handleLogin(username);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
