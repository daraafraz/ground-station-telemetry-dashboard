/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issue
  },
}

module.exports = nextConfig
