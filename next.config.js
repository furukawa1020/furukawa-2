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
  // Netlify用の設定を追加
  target: 'serverless',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  }
};

module.exports = nextConfig;