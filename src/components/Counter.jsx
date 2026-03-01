// This is my Counter function component for Task #2
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function resetCount() {
    setCount(0);
  }
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase by 1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
