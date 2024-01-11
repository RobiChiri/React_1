import { AlertClock } from "./AlertClock";

export function App() {
  function handleButtonClick() {
    const now = new Date();
    alert(now.toLocaleTimeString());
  }
  return (
    <div>
      <AlertClock eventHandler={handleButtonClick} />
    </div>
  );
}
