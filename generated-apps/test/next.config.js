/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'test.edusite.com'],
    unoptimized: true
  },
  env: {
    SITE_NAME: 'test',
    SITE_DOMAIN: 'test.edusite.com',
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
  }
}

module.exports = nextConfig