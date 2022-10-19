/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-AU", "en-GB", "en-NZ", "en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
