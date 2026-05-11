/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'thedailyscale.online' }],
        destination: 'https://www.thedailyscale.online/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;