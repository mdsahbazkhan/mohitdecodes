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
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "static.topmate.io",
      },
      {
        protocol: "https",
        hostname: "topmate-production.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "sharing-image-assets.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  outputFileTracingRoot: "/home/sahbaz/Projects/mohitdecodes",
};

export default nextConfig;
