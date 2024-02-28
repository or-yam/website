import ReadmeContent from "@/components/readmeContent";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

type RepoData = {
  name: string;
  language: string;
  topics: string[];
  description: string;
  homepage: string;
  html_url: string;
  default_branch: string;
};

const getRepoData = async (slug: string): Promise<RepoData | null> => {
  const response = await fetch(`https://api.github.com/repos/or-yam/${slug}`);
  if (response.ok) {
    const data = await response.json();
    if (data.message === "Not Found") {
      return null;
    }
    return data as RepoData;
  }
  return null;
};

export default async function Project({ params }: Props) {
  const { slug } = params;
  const data = await getRepoData(slug);

  if (!data) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-4 p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {data.name}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{data.description}</p>

      <Badge variant="outline">{data.language}</Badge>

      <Link
        className={buttonVariants({ variant: "link" })}
        href={data.homepage}
        target="_blank"
      >
        View
      </Link>
      <Link
        className={buttonVariants({ variant: "link" })}
        href={data.html_url}
        target="_blank"
      >
        Source code
      </Link>

      <ul className="flex gap-2 [&>li]:mt-2">
        {data.topics?.map((topic) => (
          <li key={topic}>
            <Badge>{topic}</Badge>
          </li>
        ))}
      </ul>
      <ReadmeContent branch={data.default_branch} slug={slug} />
    </main>
  );
}
