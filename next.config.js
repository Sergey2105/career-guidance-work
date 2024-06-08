/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    output: "standalone",
    distDir: "dist",
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: require.resolve("@svgr/webpack"),
                    options: {
                        typescript: true,
                    },
                },
            ],
        });
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "./"),
        };

        return config;
    },
};

module.exports = nextConfig;
