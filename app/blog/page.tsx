import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-start justify-start p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blog
      </h1>

      <ul className="my-6 ml-6  [&>li]:mt-2">
        <li>
          <Link
            href="blog/intro-to-webgl-threejs"
            className={buttonVariants({ variant: "link" })}
          >
            Intro to webgl and threejs
          </Link>
        </li>
      </ul>
    </main>
  );
}
