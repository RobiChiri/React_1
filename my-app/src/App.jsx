import { StrictMode } from "./StrictMode";
import { StrictModeComponent } from "./StrictModeComponent";

export function App() {
  return (
    <div>
      <StrictMode>
        <StrictModeComponent />
      </StrictMode>
    </div>
  );
}
