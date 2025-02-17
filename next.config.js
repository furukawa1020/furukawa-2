module.exports = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  }
};