import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"], // Add the hostname of the external image source
  },
};

export default nextConfig;
