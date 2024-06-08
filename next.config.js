/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    output: "standalone",
    // distDir: "dist",
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

        return config;
    },
};

module.exports = nextConfig;
