import { MDXRemote } from "next-mdx-remote/rsc";
import type { Post } from "../page";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPost = async (slug: string): Promise<Post | null> => {
  const response = await fetch(`https://dev.to/api/articles/oryam/${slug}`, {
    headers: { "api-key": process.env.DEVTO_TOKEN || "" },
  });
  if (response.ok) {
    const data = await response.json();
    return data as Post;
  }
  return null;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    throw new Error("Post not found");
  }

  return (
    <main className="unReset grid">
      {post.cover_image && (
        <Image
          className="justify-self-center rounded-lg"
          src={post.cover_image}
          alt={post.title}
          width={800}
          height={400}
        />
      )}
      <MDXRemote source={post.body_markdown} />;
    </main>
  );
}
