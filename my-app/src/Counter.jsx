import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Counter({ initialValue, increment }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + increment);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}
