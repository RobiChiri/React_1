import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select>
          <option onChange={() => handleSetLanguage("en")}>EN</option>
          <option onChange={() => handleSetLanguage("it")}>IT</option>
        </select>

        {/* <button onClick={() => handleSetLanguage("en")}>EN</button>
        <button onClick={() => handleSetLanguage("it")}>IT</button> */}
        {/* utilizzando due button il programma funziona correttamente */}

        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}
