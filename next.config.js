/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  distDir: 'out',

  // Force client-side rendering only
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },

  // Disable React strict mode to avoid hydration errors
  reactStrictMode: false,

  // Configure compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
