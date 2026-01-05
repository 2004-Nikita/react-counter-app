import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleCount = (type) => {
    if (type === "inc") setCount(count + 1);
    if (type === "dec") setCount(count - 1);
    if (type === "reset") setCount(0);

    // Trigger animation
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <div className="counter-container">
        <h1>React Counter App</h1>
        <p className={`count ${animate ? "pop" : ""}`}>{count}</p>

        <div className="buttons">
          <button className="btn increment" onClick={() => handleCount("inc")}>+</button>
          <button className="btn decrement" onClick={() => handleCount("dec")}>-</button>
          <button className="btn reset" onClick={() => handleCount("reset")}>Reset</button>
        </div>

        <button className="btn mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
