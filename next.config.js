/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Forms enable you to create and update data in web applications. Next.js provides a powerful way to handle form submissions and data mutations using Server Actions.
        serverActions: true,
    },
}

module.exports = nextConfig
