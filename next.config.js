/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['ja-JP', 'en-US'],
        // [Language Codes]-[Country Code]
        defaultLocale: 'ja-JP',
        localeDetection: false,
        domains: [
            {
              domain: 'efgriver.com',
              defaultLocale: 'ja-JP',
            },
        ]
    }
    // Forms enable you to create and update data in web applications. Next.js provides a powerful way to handle form submissions and data mutations using Server Actions.
    // serverActions: true,
}

module.exports = nextConfig
