/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['solutionfounder.com'],
  },
  
}

module.exports = nextConfig

{
  swcMinify: false // it should be false by default 
}


