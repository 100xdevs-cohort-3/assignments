import AuthSystem from "./components/AuthSystem";
import UserContextProvider from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <AuthSystem />
    </UserContextProvider>
  );
}

export default App;
