/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.atmequiz.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
