/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.atmequiz.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'test4.atmegame.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
