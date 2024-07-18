import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setcounter(counter);
  }
  function decrease() {
    if (counter > 0) {
      //counter cannot go to -ve side
      setcounter((counter -= 1));
    }
  }
  return (
    <>
      <h1>Value increment and decrement project</h1>
      <div>value:{counter}</div>
      <button onClick={increase}>increase{counter}</button>
      <br />
      <button onClick={decrease}>decrease</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
