import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
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
          hostname: 'www.londonfine.co.uk',
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
        {
          protocol: 'https',
          hostname: 'www.marthastewart.com',
          pathname: '/**'
        },
    ]
  }
};


export default nextConfig;
