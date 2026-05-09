/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
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

export default nextConfig;