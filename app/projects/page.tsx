import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const pinnedRepos = [
  "clightsaber",
  "randommdn",
  "pokedex-CSS",
  "better-call",
  "wilcobadge",
  "giraffat-yam",
  "dotfiles",
  "game-of-life",
] as const;

export default async function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-4 p-8 sm:p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
      </h1>
      <ul className="my-6  [&>li]:mt-2">
        {pinnedRepos.map((repo) => (
          <li key={repo}>
            <Link
              href={`/projects/${repo}`}
              className={buttonVariants({ variant: "link" })}
            >
              {repo}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
