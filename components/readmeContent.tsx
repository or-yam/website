import { remark } from "remark";
import html from "remark-html";

type ReadmeContentProps = { slug: string; branch: string };

export default async function ReadmeContent({
  slug,
  branch,
}: ReadmeContentProps) {
  const readmeUrl = `https://raw.githubusercontent.com/or-yam/${slug}/${branch}/README.md`;
  const fileContents = await fetch(readmeUrl).then((res) => res.text());
  const processedContent = await remark().use(html).process(fileContents);

  const contentHtml = processedContent.toString();
  return (
    <div
      className="unReset"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
