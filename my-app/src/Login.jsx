import { useForm } from "./useForm";

export function Login() {
  const { username, password, session, onDataChange, onSubmit, onReset } =
    useForm();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" value={username} onChange={onDataChange} />
        <input
          name="password"
          type="password"
          value={password}
          onChange={onDataChange}
        />
        <input
          name="session"
          type="checkbox"
          checked={session}
          onChange={onDataChange}
        />
        <button disabled={!username || !password} type="submit">
          Login
        </button>

        <button onClick={onReset}>Reset</button>
      </form>
    </div>
  );
}
