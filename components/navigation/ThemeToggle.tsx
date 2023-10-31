"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="flex items-center justify-center h-full w-full hover:scale-110 dark:rotate-180 rounded-full transition-all duration-300"
      onClick={handleTheme}
    >
      <div className="flex items-center justify-center h-theme-button w-theme-button outline outline-2 -outline-offset-2 outline-secondary-light dark:outline-secondary-dark rounded-full">
        <div className="h-full w-full bg-secondary-light dark:bg-secondary-dark theme-toggle-inner-mask rounded-full"></div>
      </div>
    </button>
  );
}
