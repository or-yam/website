import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dev.to",
        port: "",
        pathname: "/cdn-cgi/image/**",
      },
    ],
  },
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
