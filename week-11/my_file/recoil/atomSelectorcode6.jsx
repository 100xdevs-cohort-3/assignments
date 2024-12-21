//counter.js different folder

import {atom, selector } from "recoil";


export const counterAtom=atom({
    default:0,
    key:"counter"
})

export const evenSelector=selector({
    key:"isEvenSelcetor",
    get:function({get}){
        const currentCount=get(counterAtom);
        const isEven=(currentCount % 2==0);
        return isEven;
    }

})


//App.jsx
import React from 'react';
import { RecoilRoot,useRecoilValue, useSetRecoilState } from 'recoil';
import {counterAtom, evenSelector} from "./store/atoms/counter";
function App(){
  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
    
  </div>
}


function Buttons(){
  const setCount=useSetRecoilState(counterAtom);


  function increase(){
    setCount(c => c + 1)
  }

  function decrease (){
    setCount(c => c - 1)
  }
  return <div>
    <button onClick={increase }>Increase</button>
    <button onClick={decrease}>Decrease </button>
  </div>
}

function Counter(){
  const count=useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>

}

function IsEven(){
  const even=useRecoilValue(evenSelector);

  return <div>
    {even ? "Even" : "Odd" }
  </div>

}


export default App;
