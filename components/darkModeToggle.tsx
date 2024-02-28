"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { FC, useEffect, useState } from "react";

export const DarkModeToggle: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  const onCheckedChange = (isChecked: boolean) =>
    setTheme(isChecked ? "dark" : "light");
  /** To avoid hydration mismatch https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch */
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Switch />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <Switch onCheckedChange={onCheckedChange} checked={theme !== "light"} />
    </div>
  );
};
