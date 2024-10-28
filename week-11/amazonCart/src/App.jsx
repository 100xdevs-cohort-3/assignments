import React, { useState } from 'react'
import './App.css'
import {RecoilRoot} from "recoil"


import AppBar from './components/AppBar'
import AppBody from './components/AppBody'

function App() {
  return (
    <RecoilRoot>
      <AmazonCart/>
    </RecoilRoot>
  )
}
function AmazonCart(){
    return(<div style={{backgroundColor:"#F3F4F6", minHeight:"100vh"}}>
      <AppBar/>
      <AppBody/>
    </div>)

}







export default App
