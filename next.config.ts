import { createRequire } from "module";
import type { NextConfig } from "next";

const require = createRequire(import.meta.url);
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_VERSION: require("./package.json").version || "0.0.0",
  },
  compiler: {
    removeConsole: isProd && {
      exclude: ["error", "warn", "info"],
    },
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
