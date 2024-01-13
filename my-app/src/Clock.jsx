import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      console.log("Updating date...");
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      {language === "en" ? <p>Current time: </p> : <p>Ora attuale: </p>}
      {date.toLocaleTimeString()}
    </div>
  );
}
