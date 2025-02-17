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
  // targetプロパティを削除し、output設定を追加
  output: 'standalone',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  }
};

module.exports = nextConfig;