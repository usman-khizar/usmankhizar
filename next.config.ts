import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: '/admin', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/admin/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/geo-vs-seo-2026',
        destination: '/blog/geo-vs-seo',
        permanent: true,
      },
      {
        source: '/blog/linkedin-profile-seo',
        destination: '/blog/how-to-optimise-linkedin-profile',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
