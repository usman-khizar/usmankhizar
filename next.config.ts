import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
