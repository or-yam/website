"use client";

import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "./darkModeToggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex p-4 fixed bg-background w-full border-b">
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
              pathname.startsWith("/projects") && "text-blue-300"
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
              pathname.startsWith("/blog") && "text-blue-300"
            )}
            href="/blog"
          >
            blog
          </Link>
        </li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
}
