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
    <div className="relative z-10">
      <button className="theme-toggle" onClick={handleTheme}>
        Theme
      </button>
    </div>
  );
}
