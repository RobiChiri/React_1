import { useEffect, useState, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

// eslint-disable-next-line react/prop-types
export function Counter({ initialValue, increment, decrement }) {
  const [counter, setCounter] = useState(initialValue);

  const prevDirectionRef = useRef(null);

  useEffect(() => {
    console.log(`The current value is ${counter}`);
    const newDirection = counter > initialValue ? "up" : "down";
    if (newDirection !== prevDirectionRef.current) {
      console.log(newDirection);
      prevDirectionRef.current = newDirection;
    }
  }, [counter, initialValue]);

  function handleCounterIncrement() {
    setCounter((c) => c + increment);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - decrement);
  }
  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
