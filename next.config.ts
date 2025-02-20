import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export (creates 'out/' directory)
  images: {
    unoptimized: true, // Ensures images work with static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing issues
};

export default nextConfig;
