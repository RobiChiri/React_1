import useSWR, { mutate } from "swr";

export function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  const refetchData = () => {
    mutate();
  };

  return { data, error, refetchData };
}
