import { MDXRemote } from "next-mdx-remote/rsc";

type ReadmeContentProps = { slug: string; branch: string };

export default async function ReadmeContent({
  slug,
  branch,
}: ReadmeContentProps) {
  const readmeUrl = `https://raw.githubusercontent.com/or-yam/${slug}/${branch}/README.md`;
  const readmeMD = await fetch(readmeUrl).then((res) => res.text());

  return (
    <div className="unReset">
      <MDXRemote source={readmeMD} />
    </div>
  );
}
