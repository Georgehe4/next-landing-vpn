const { APP_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/app',
        destination: `${APP_URL}`,
      },
      {
        source: '/app/:path*',
        destination: `${APP_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig