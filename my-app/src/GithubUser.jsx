/* eslint-disable react/prop-types */

import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error detected...</h1>}
      {data && (
        <h1>
          {data.name} {data.login} {data.avatar_url}
        </h1>
      )}
    </div>
  );
}
