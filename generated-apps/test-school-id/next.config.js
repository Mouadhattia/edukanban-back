/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'test-school-id.edusite.com'],
    unoptimized: true
  },
  env: {
    SITE_NAME: 'test school Id',
    SITE_DOMAIN: 'test-school-id.edusite.com'
  }
}

module.exports = nextConfig