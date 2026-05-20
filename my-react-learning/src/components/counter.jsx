import { useState } from "react";
import "./counter.css";


function Counter() {

  const [count, setCount] = useState(0);

  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  

  return (
    <div className="counter">
      <h1>COUNT: {count}</h1>

      <button onClick={decrease} className="btn">
        Decrease
      </button>

      <button onClick={increase} className="btn">
        Increase
      </button>

    </div>
  );
}

export default Counter;