/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
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

export default nextConfig;
