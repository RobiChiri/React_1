import { useState } from "react";

export function Login(props) {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handleChangeInputData(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }

  function handleLoginClick() {
    // eslint-disable-next-line react/prop-types
    props.onLogin(data);
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
      session: false,
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        name="username"
        value={data.username}
        onChange={handleChangeInputData}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChangeInputData}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleChangeInputData}
      />
      <button
        disabled={!data.username || !data.password}
        onClick={handleLoginClick}
      >
        Login
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
