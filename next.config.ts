import type {NextConfig} from "next";

// Set NEXT_PUBLIC_BASE_PATH to the repo name (e.g. "portfolio") in your
// GitHub Actions workflow or .env.production. Leave it unset for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH}`
    : "";

const nextConfig: NextConfig = {
    output: "export",
    basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true
    },
    reactCompiler: true,
    experimental: {
        turbopackFileSystemCacheForDev: true
    },
};

export default nextConfig;
