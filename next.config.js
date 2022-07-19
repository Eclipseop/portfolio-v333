/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects()  {
    return [
      {
        source: '/project',
        destination: '/projects',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
