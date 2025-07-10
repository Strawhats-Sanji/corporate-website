// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     // domains: ['res.cloudinary.com'],
//     remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'res.cloudinary.com',
//       pathname: '/**',
//     },
//   ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  // Required for Netlify
  output: 'standalone',
};

module.exports = nextConfig;
