"use client";

import { useEffect } from "react";
import type { Theme } from "./types";
import { useTheme } from "./use-theme";
import { SunIcon, MoonIcon, ComputerIcon } from "lucide-react";

const options: { value: Theme; icon: React.ReactNode }[] = [
  {
    value: "light",
    icon: <SunIcon size={16} />,
  },
  {
    value: "system",
    icon: <ComputerIcon size={16} />,
  },
  {
    value: "dark",
    icon: <MoonIcon size={16} />,
  },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme, mounted } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "D") {
        const currentIndex = options.findIndex((o) => o.value === theme);
        const next = options[(currentIndex + 1) % options.length];
        setTheme(next.value);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-(--border) bg-(--background) p-1"
      role="group"
      aria-label="Theme switcher"
    >
      {options.map(({ value, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={value}
          aria-pressed={theme === value}
          className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ${
            theme === value
              ? "bg-(--muted) text-(--primary)"
              : "text-(--muted-foreground) hover:text-(--primary)"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};
