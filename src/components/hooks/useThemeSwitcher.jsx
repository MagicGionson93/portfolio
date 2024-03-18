import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const [mode, setMode] = useState(window.localStorage.getItem("theme"));

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setMode(window.localStorage.getItem("theme"));
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setMode(window.localStorage.getItem("theme"));
    }
  }, [mode]);

  return [mode, setMode];
}
