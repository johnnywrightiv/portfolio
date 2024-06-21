import { useState, useEffect } from "react";

const THEMES = ['system', 'light', 'dark', 'red']; // Add more themes here

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  const [systemTheme, setSystemTheme] = useState(() => 
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const applyTheme = (themeToApply) => {
    const effectiveTheme = themeToApply === "system" ? systemTheme : themeToApply;
    document.body.classList.remove(...THEMES.filter(t => t !== 'system'));
    document.body.classList.add(effectiveTheme);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    
    applyTheme(theme);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, systemTheme]);

  return { theme, changeTheme, systemTheme, availableThemes: THEMES };
};