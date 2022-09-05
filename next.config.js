/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['p16-sign-sg.tiktokcdn.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
