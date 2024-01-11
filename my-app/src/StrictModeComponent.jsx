import { useEffect, useRef } from "react";

export function StrictModeComponent() {
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Component mounted for the first time");
    }

    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>StrictMode Component</h1>
      <input name="username" ref={inputRef} />
    </div>
  );
}
