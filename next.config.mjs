/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'],
    },
    experimental: {
      appDir: true,
    },
};

export default nextConfig;
