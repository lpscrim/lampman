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
        },
        {
          protocol: 'https',
          hostname: 't.ly',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.collagerie.com',
          pathname: '/**'
        },
        {
          protocol: 'https',
          hostname: 'assets.wfcdn.com',
          pathname: '/**'
        },
    ]
  }
};


export default nextConfig;
