import { useState } from "react";

export function useForm() {
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

  function handleLogin(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    console.log(data);
  }

  function handleReset() {
    setData({
      username: " ",
      password: " ",
    });
  }

  return {
    username: data.username,
    password: data.password,
    session: data.session,
    onDataChange: handleChangeInputData,
    onSubmit: handleLogin,
    onReset: handleReset,
  };
}
