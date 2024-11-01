import { Routes, Route } from "react-router-dom"
import { AmazonStyleCart, WishList } from "./components"
import './App.css'


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<WishList />} />
      <Route path="/cart" element={<AmazonStyleCart />} />
    </Routes>

  )
}

export default App
