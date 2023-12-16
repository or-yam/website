"use client";

import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "./darkModeToggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex  p-4">
      <ul className="mr-auto flex">
        <li>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === "/" && "text-blue-300"
            )}
            href="/"
          >
            or-yam
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === "/projects" && "text-blue-300"
            )}
            href="/projects"
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === "/posts" && "text-blue-300"
            )}
            href="/posts"
          >
            posts
          </Link>
        </li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
}
