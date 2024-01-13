import { Age } from "./Age";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Welcome({ name, age }) {
  return (
    <div className="welcome">
      <p>Welcome, {name}!</p>
      {age > 18 ? <Age age={age} /> : <p>You are very young!</p>}
      <Link to="/login">Login</Link>
      <Link to="/CurrentLocation">Where you are</Link>
      <Link to="/counter">Count</Link>
    </div>
  );
}
