import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
  outputFileTracingRoot: "/home/sahbaz/Projects/mohitdecodes",
};

export default nextConfig;
