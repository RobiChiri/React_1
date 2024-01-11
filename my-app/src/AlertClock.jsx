// eslint-disable-next-line react/prop-types
export function AlertClock({ eventHandler }) {
  return (
    <div>
      <p>Click the button to show local time.</p>
      <button onClick={eventHandler}>Click me!</button>
    </div>
  );
}
