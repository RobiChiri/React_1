import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    let value = event.target.value;
    setInputValue(value);
  }

  function handleButtonClick() {
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleResetButtonClick() {
    setTodos([]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add item</button>
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
}
