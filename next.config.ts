import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'files.stripe.com',
            port: '',
            pathname: '/links/**',
            search: '',
        }
    ]
  }
};

export default nextConfig;
