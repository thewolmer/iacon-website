/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // async redirects() {
  //   return [{ source: '/collection/', destination: '/', permanent: false }];
  // },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, net: false, tls: false };
  //   config.externals.push('pino-pretty', 'lokijs', 'encoding');
  //   return config;
  // },
};

export default nextConfig;
