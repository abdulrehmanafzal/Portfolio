"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dark theme is default, so we only add "dark" class if user explicitly wants light theme
    try {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        // User wants light theme, so add dark class
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        // Default is dark theme (no class needed) - force remove any dark class
        document.documentElement.classList.remove("dark");
        setIsDark(false);
        // Ensure localStorage is set to dark if not set
        if (!theme || theme !== "dark") {
          localStorage.setItem("theme", "dark");
        }
      }
    } catch (e) {
      // If localStorage fails, default to dark theme
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      // User wants light theme, so add dark class
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      // User wants dark theme (default), so remove dark class
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-300 dark:text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
