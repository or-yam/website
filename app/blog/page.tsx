import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type Post = { id: string; slug: string; title: string };

const getPosts = async (): Promise<Post[] | null> => {
  const response = await fetch("https://dev.to/api/articles/me/published", {
    headers: { "api-key": "3yMZpvHGsit1Smbrh3E2fwov" },
  });

  if (response.ok) {
    const data = await response.json();
    return data as any;
  }
  return null;
};

export default async function Blog() {
  const posts = (await getPosts()) || [];

  return (
    <main className="flex gap-4 min-h-screen flex-col items-start justify-start p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blog
      </h1>

      <ul className="my-6 ml-6  [&>li]:mt-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`blog/${post.slug}`}
              className={buttonVariants({ variant: "link" })}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
