export function MouseClicker() {
  function handleButtonClick() {
    console.log(event.target.name);
  }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        ONE
      </button>
    </div>
  );
}
