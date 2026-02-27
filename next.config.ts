import type {NextConfig} from "next";

const repo = "/kornect"

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    reactCompiler: true,
    experimental: {
        turbopackFileSystemCacheForDev: true
    },
    basePath: repo,
    assetPrefix: repo,
};

export default nextConfig;
