/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-AU", "en-GB", "en"],
    defaultLocale: "en-AU",
  },
};

module.exports = nextConfig;
