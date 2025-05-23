/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
};

module.exports = nextConfig;
