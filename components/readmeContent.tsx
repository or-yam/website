import { remark } from "remark";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

type ReadmeContentProps = { slug: string; branch: string };

export default async function ReadmeContent({
  slug,
  branch,
}: ReadmeContentProps) {
  const readmeUrl = `https://raw.githubusercontent.com/or-yam/${slug}/${branch}/README.md`;
  const fileContents = await fetch(readmeUrl).then((res) => res.text());

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(fileContents);

  const contentHtml = String(processedContent);
  return (
    <div
      className="unReset"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
