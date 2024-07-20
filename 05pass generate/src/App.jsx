import { useState } from 'react'

import './App.css'

function App() {
 const [length,setlength]=useState(8)
 const[numberAllowed,setnumberAllowed]=usestate(false);
 const[charAllowed,setcharAllowed]=usestate(false);
const[password,setpassword]=usestate("")
  
  return (
 <>
<h1 className='text-4xl text-center text-white'>Password Generator</h1>
 </> 
  )  
  }


export default App
