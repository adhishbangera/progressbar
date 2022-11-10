import React, { useState, useEffect } from "react";
import "./App.css";

const Progressbar = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  return (
    <div>
      <div className="progressBar">
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s",
          }}
        ></div>
        <span className="progressPercentage">{filled}%</span>
      </div>
      <button className="btn" onClick={() => setIsRunning(true)}>
        Run
      </button>
    </div>
  );
};

export default Progressbar;
