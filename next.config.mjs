/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', // Allows all paths under this domain
      },
    ],
  },
  
  // experimental: {
    // appDir: true,
  // },
};

export default nextConfig;