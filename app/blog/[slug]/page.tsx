import { MDXRemote } from "next-mdx-remote/rsc";
import { Post } from "../page";
import Image from "next/image";

type Props = {
  params: { slug: string };
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

export default async function Post({ params }: Props) {
  const { slug } = params;
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
