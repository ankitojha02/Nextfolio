import React, { createContext, useState, useContext } from "react";

const StyleSwitcherContext = createContext();

export const useStyleSwitcher = () => useContext(StyleSwitcherContext);

const StyleSwitcherProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" or "dark"
  const [activeColor, setActiveColor] = useState("colors1");

  const toggleSwitcher = () => setIsOpen((prev) => !prev);

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  const setActiveStyle = (color) => {
    setActiveColor(color);
    document.querySelectorAll('[id^="colors"]').forEach((style) => {
      if (style.id === color) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  };

  return (
    <StyleSwitcherContext.Provider
      value={{
        isOpen,
        theme,
        toggleSwitcher,
        switchTheme,
        setActiveStyle,
        activeColor,
      }}
    >
      {children}
    </StyleSwitcherContext.Provider>
  );
};

export default StyleSwitcherProvider;
