import { Welcome } from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome name="Robi" />} />
        </Routes>
      </Router>
    </div>
  );
}
