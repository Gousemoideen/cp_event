import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // 🚫 HARD DISABLE TURBOPACK
  },
};

export default nextConfig;
