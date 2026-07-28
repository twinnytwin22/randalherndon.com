"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const emptySubscribe = () => () => {};

const DarkModeSwitch = () => {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { theme, setTheme, systemTheme } = useTheme();

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="z-999999">
      {currentTheme === "dark" ? (
        <SunIcon
          role="button"
          className="h-8 w-8 ml-1 mt-1 cursor-pointer"
          stroke="white"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          role="button"
          stroke="black"
          className="h-8 w-8 ml-1 mt-1 cursor-pointer "
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
