"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { FC } from "react";

export const DarkModeToggle: FC = () => {
  const { setTheme } = useTheme();

  return (
    <Switch
      onCheckedChange={(isChecked) => setTheme(isChecked ? "dark" : "light")}
    />
  );
};
