import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export type Post = {
  id: string;
  slug: string;
  title: string;
  published_at: string;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
  body_markdown: string;
};

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

const formatPublishedAt = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function Blog() {
  const posts = (await getPosts()) || [];

  return (
    <main className="flex h-max flex-col items-start justify-start gap-4 px-8 pb-4 pt-28 sm:px-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blog
      </h1>

      <ul className="my-4 [&>li]:mt-4">
        {posts.map((post) => (
          <li className="" key={post.id}>
            <Link
              href={`blog/${post.slug}`}
              className={buttonVariants({ variant: "link" })}
            >
              {post.title}
            </Link>

            <p className="mb-2 pl-4 text-sm text-muted-foreground">
              {formatPublishedAt(post.published_at)}
            </p>

            <div className="flex gap-2 pl-4">
              {post.tag_list.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
