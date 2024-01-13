import { SWRConfig } from "swr";
import { GithubUser } from "./GithubUser";
const fetcher = (url) => fetch(url).then((response) => response.json());
export function App() {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
        <GithubUser username="RobiChiri" />
      </SWRConfig>
    </div>
  );
}
