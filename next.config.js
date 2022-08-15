/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
