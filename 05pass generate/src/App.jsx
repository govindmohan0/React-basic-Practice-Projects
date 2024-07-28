import { useState,useCallback } from 'react'

import './App.css'

function App() {
 const [length,setlength]=useState(8)
 const[numberAllowed,setnumberAllowed]=usestate(false);
 const[charAllowed,setcharAllowed]=usestate(false);
const[password,setpassword]=usestate("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed)str+="0123546789"
if(charAllowed)str+="!@#$%^&*()_+{}[]~`"
for(let i=1;i<=length;i++){
  let char=(math.random()*str.length+1);
pass=str.charAt(char)
}
setpassword(pass)
  },[length,numberAllowed,charAllowed,setpassword])>{
   
  }
  return (
 <>
<div className='w-full max-w-md mx-auto shadow-md rounded text-orange'>Password Generator</div>
 
 </> 
  )
  }


export default App
