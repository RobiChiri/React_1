import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { CurrentLocation } from "./CurrentLocation";
import { Counter } from "./Counter";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome name="Robi" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CurrentLocation" element={<CurrentLocation />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}
