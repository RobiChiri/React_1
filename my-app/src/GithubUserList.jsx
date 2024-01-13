import { Link, useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.login}`}
              onClick={() => navigate(`/users/${user.login}`)}
            >
              {user.login}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
