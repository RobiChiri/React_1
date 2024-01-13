import { Counter } from "./Counter";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/counter"
            element={<Counter initialValue={0} increment={1} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
