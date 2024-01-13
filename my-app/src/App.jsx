import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<div>Add a user and select it</div>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
