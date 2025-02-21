import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export (creates 'out/' directory)
  images: {
    unoptimized: true, // Ensures images work with static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing issues
  // basePath: "/TopToBottomCleaningServices", // ✅ Change to your GitHub repo name
  // assetPrefix: "/TopToBottomCleaningServices/", // ✅ Ensures correct paths for CSS, JS, and images
};

export default nextConfig;
