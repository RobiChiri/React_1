import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [searchUser, setSearchUser] = useState("");
  const [users, setUsers] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (searchUser) {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchUser}`
      );
      const json = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...json.items]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchUser}
          onChange={(event) => setSearchUser(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <GithubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
}
