import { useState } from "react";
import { Welcome } from "./Welcome";
export function InteractiveWelcome() {
  const [username, setUsername] = useState("");

  function handleUsernameChange(event) {
    const value = event.target.value;

    setUsername(value);
  }
  return (
    <div>
      <h1>Interactive Welcome</h1>
      <input value={username} onChange={handleUsernameChange} />
      <Welcome name={username} age={20} />
    </div>
  );
}
