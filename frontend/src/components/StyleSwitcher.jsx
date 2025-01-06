import React, { useState, useEffect } from "react";
import "./StyleSwitcher.css"; // Your CSS for the component

const StyleSwitcher = () => {
  const [isSwitcherOpen, setSwitcherOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [activeColor, setActiveColor] = useState("color-1");

  const colorMap = {
    "color-1": "#443bf6",
    "color-2": "#ec1839",
    "color-3": "#37b182",
    "color-4": "#f021b2",
    "color-5": "gold",
  };

  // Toggle the style switcher
  const toggleStyleSwitcher = () => {
    setSwitcherOpen((prev) => !prev);
  };

  // Handle dark/light mode toggle
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  // Set the active color theme
  const handleSetActiveStyle = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--skin-color", colorMap[color]);
  };

  // Sync dark mode icon on load
  useEffect(() => {
    const dayNightIcon = document.querySelector(".day-night i");
    if (isDarkMode) {
      dayNightIcon.classList.add("fa-sun");
      dayNightIcon.classList.remove("fa-moon");
    } else {
      dayNightIcon.classList.add("fa-moon");
      dayNightIcon.classList.remove("fa-sun");
    }
  }, [isDarkMode]);

  // Hide style switcher on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isSwitcherOpen) {
        setSwitcherOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSwitcherOpen]);

  return (
    <div className={`style-switcher ${isSwitcherOpen ? "open" : ""}`}>
      {/* Toggler */}
      <div className="style-switcher-toggler s-icon" onClick={toggleStyleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>

      {/* Day/Night Mode */}
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className="fas"></i>
      </div>

      {/* Theme Colors */}
      <h4>Theme Colors</h4>
      <div className="colors">
        {Object.keys(colorMap).map((color) => (
          <span
            key={color}
            className={color}
            onClick={() => handleSetActiveStyle(color)}
            style={{
              border: activeColor === color ? "2px solid black" : "none",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
