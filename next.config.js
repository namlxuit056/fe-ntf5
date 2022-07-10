/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    END_POINT: process.env.END_POINT,
    BASE_URL: process.env.BASE_URL,
    STATIC_IMAGE: process.env.STATIC_IMAGE,
  },
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
