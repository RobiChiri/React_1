import { GithubUser } from "./GithubUser";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="users/:username" element={<GithubUser />} />
        </Routes>
      </Router>
    </div>
  );
}
