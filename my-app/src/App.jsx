import { Login } from "./Login";

export function App() {

  function onLogin(data) {
    console.log(data);
  }
  return (
    <div>
      <Login onLogin={onLogin} />
    </div>
  );
}
