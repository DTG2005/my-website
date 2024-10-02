/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.githubassets.com",
        port: "",
        pathname: "/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        protocol: "https",
        hostname: "linkedin.com",
        port: "",
        pathname: "/static/images/LinkedIn-Mark.png",
      },
    ],
  },
};

export default nextConfig;
