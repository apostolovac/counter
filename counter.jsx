import { useState } from "react";

function Counter() {
  //   let count = 1;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter Example</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> 
      <button onClick={() => setCount (count = 0)}>Reset</button> 
    </div>
  );
}
export default Counter;

const [counter, setCounter] = useState(0);
        
 const incrementCounter = () => {
   setCounter(counter + 1);
 };
        
 const decrementCounter = () => {
  if (counter !== 0) {
      setCounter(counter - 1);
   }
 };