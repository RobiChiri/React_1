import { Age } from "./Age";

// eslint-disable-next-line react/prop-types
export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>{age > 18 ? <Age age={age} /> : <p>You are very young!</p>}</p>
    </div>
  );
}
