const { config } = require("process");

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    // loader: require.resolve("@svgr/webpack"),
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                        typescript: true,
                    },
                },
            ],
        });
        return config;
    },
};

module.exports = nextConfig;
