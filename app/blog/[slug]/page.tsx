import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

const getPost = async (slug: string): Promise<any | null> => {
  const response = await fetch(`https://dev.to/api/articles/oryam/${slug}`, {
    headers: { "api-key": "3yMZpvHGsit1Smbrh3E2fwov" },
  });
  if (response.ok) {
    const data = await response.json();
    return data as any;
  }
  return null;
};

export default async function Post({ params }: Props) {
  const { slug } = params;
  const post = await getPost(slug);

  return <MDXRemote source={post.body_markdown} />;
}
