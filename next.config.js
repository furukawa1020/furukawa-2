/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    config.externals = {
      'tailwind-scrollbar': 'tailwind-scrollbar'
    };
    return config;
  }
};

module.exports = nextConfig;