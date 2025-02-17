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
  // 出力サイズを最適化
  output: 'standalone',
  // 不要なファイルを除外
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    // 大きなファイルを分割
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxSize: 200000
      }
    };
    return config;
  }
};

module.exports = nextConfig;