import { useState } from "react";
import "./counter.css";

function Counter() {
    const [count, setcount]= useState(0);

    function increament(){
        setcount((prevstate)=> prevstate +1)
    }
    function decreament(){
        setcount((prevstate)=> prevstate -1)
    }
    function reset(){
        setcount(0);
    }  

  return (
    <div className="counter">
        <h1>{count}</h1>    
      <button onClick={increament}>Increace</button>
      <button onClick={decreament}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;