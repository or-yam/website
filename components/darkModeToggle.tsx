"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { FC } from "react";

export const DarkModeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  const onCheckedChange = (isChecked: boolean) =>
    setTheme(isChecked ? "dark" : "light");

  return (
    <div className="flex gap-2 justify-center items-center">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Switch onCheckedChange={onCheckedChange} checked={theme !== "light"} />
    </div>
  );
};
