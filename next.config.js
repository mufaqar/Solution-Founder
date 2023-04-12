/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sf.tmg.mt'],
  },
};

module.exports = nextConfig;

{
  swcMinify: false; // it should be false by default
}
