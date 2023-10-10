// React Imports
import React, { useEffect, useState } from "react";

// Display Component
export default function Display({ text }) {
  // States
  const [currentText, setCurrentText] = useState("Ready...");

  // UseEffect to revert text back to default after 1s delay
  useEffect(() => {
    if (text && text !== "Ready...") {
      setCurrentText(text);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText("Ready...");
      }, 1000);
      return () => clearTimeout(timeoutId); // Clear timeout
    }
  }, [text]);

  return (
    <div
      id="display"
      className="py-2 font-family-code bg-glass-display shadow-md container-fluid d-flex flex-column justify-content-center align-items-center fs-4 text-white text-opacity-75 border rounded-3 border-white border-opacity-25"
    >
      {currentText}
    </div>
  );
}
