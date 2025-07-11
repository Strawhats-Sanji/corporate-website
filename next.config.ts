/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← this replaces next export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
