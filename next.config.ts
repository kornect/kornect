import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    reactCompiler: true,
    experimental: {
        turbopackFileSystemCacheForDev: true
    },
    assetPrefix: "/kornect",
};

export default nextConfig;
