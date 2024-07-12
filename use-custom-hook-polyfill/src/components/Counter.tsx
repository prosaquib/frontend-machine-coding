import React, { useState } from "react";
import "../styles/App.css";
import useCustomEffect from "../hooks/use-custom-effect";

function Counter() {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("Effect counter fired");
  }, [count]);
  return (
    <div className="wrapper">
      <div className="counter__container">
        <h1>Counter : {count}</h1>
      </div>
      <div className="button_container">
        <button onClick={() => setCount((prev) => ++prev)}>Increment</button>
        <button onClick={() => setCount((prev) => --prev)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
