/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/cms/:path*',
        destination: 'http://localhost:4000/cms/:path*'
      }
    ];
  }

}

module.exports = nextConfig
