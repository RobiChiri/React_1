import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter initialValue={0} increment={3} decrement={2} />
    </div>
  );
}
