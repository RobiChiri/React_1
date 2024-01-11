export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
