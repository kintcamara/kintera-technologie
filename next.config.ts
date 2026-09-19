import type { NextConfig } from "next";

const output = process.env.NEXT_OUTPUT as "standalone" | "export" | undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output,
  ...(output === "export"
    ? { trailingSlash: true, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
