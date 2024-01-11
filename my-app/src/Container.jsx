/* eslint-disable react/prop-types */
import { useState } from "react";
export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleTitleClick() {
    setCollapsed((c) => !c);
  }

  return (
    <div className="app">
      <div className="app-title" onClick={handleTitleClick}>
        {title}
      </div>
      {!collapsed && <div className="app-content">{children}</div>}
    </div>
  );
}
