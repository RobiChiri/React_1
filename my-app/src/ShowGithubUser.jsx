import { useParams } from "react-router-dom";
export function ShowGithubUser() {
  const { username } = useParams();

  return (
    <div>
      <h1>GitHub User: {username}</h1>
    </div>
  );
}
