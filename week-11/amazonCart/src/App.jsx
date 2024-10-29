import React, { useState } from 'react'
import './App.css'
import {RecoilRoot} from "recoil"
import AmazonCart from './components/AmazonCart'
function App() {
  return (
    <RecoilRoot>
      <AmazonCart/>
    </RecoilRoot>
  )
}
export default App
