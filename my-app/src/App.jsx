import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/users" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}
