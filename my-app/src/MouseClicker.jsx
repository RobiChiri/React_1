export function MouseClicker() {
  function handleButtonClick() {
    console.log(event.target.name);
  }
  function handleImgClick() {
    console.log(event.target.src);
  }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        <img
          src="https://google.com"
          height={24}
          width={24}
          onClick={handleImgClick}
        ></img>
        ONE
      </button>
    </div>
  );
}
