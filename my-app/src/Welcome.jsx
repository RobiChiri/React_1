/* eslint-disable react/prop-types */
import { Age } from "./Age";
export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>
        <Age age={age} />
      </p>
    </div>
  );
}