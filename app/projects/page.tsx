import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-start justify-start p-8 sm:p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
      </h1>
      <ul className="my-6  [&>li]:mt-2">
        <li>
          <Link
            href="projects/clightsaber"
            className={buttonVariants({ variant: "link" })}
          >
            clightsaber
          </Link>
        </li>
        <li>
          <Link
            href="projects/randommdn"
            className={buttonVariants({ variant: "link" })}
          >
            random-mdn
          </Link>
        </li>
        <li>
          <Link
            href="projects/pokedeCSS"
            className={buttonVariants({ variant: "link" })}
          >
            pokedex-CSS
          </Link>
        </li>
      </ul>
    </main>
  );
}
