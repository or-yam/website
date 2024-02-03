import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    remarkPlugins: [remarkGfm, [remarkRehype, { allowDangerousHtml: true }]],
    rehypePlugins: [rehypeRaw, rehypeStringify],
  },
});

export default withMDX(nextConfig);
