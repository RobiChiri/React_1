import { Hello } from "./Hello";
import { Message } from "./Message";

export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
    </div>
  );
}

// il programma funziona regolarmente, è possibile utilizzre più volte lo stesso componente Hello
// ed è possibile renderizzare Message direttamente in App
