import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true, // Prevents Next.js from stripping or redirecting trailing slashes on API routes
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
        port: "3000",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
