/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
}

module.exports = nextConfig
