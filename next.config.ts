import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com',
      }
    ]
  },
  async redirects() {
    return [
      { source: '/service/back-pain-therapy-malaysia', destination: '/en/conditions/back-pain', permanent: true },
      { source: '/service/frozen-shoulder-therapy-malaysia', destination: '/en/conditions/frozen-shoulder', permanent: true },
      { source: '/service/shoulder-pain-therapy-at-yapchankor', destination: '/en/conditions/shoulder-pain', permanent: true },
      { source: '/service/knee-pain-therapy-malaysia', destination: '/en/conditions/knee-pain', permanent: true },
      { source: '/service/neck-pain-therapy-malaysia', destination: '/en/conditions/neck-pain', permanent: true },
      { source: '/service/sprained-ankle-therapy-malaysia', destination: '/en/conditions/sprained-ankle', permanent: true },
      { source: '/service/wrist-pain-therapy-malaysia', destination: '/en/conditions/wrist-pain', permanent: true },
      { source: '/service/plantar-fasciitis-treatment-malaysia', destination: '/en/conditions/plantar-fasciitis', permanent: true },
      { source: '/service/lower-back-pain-therapy-malaysia', destination: '/en/conditions/lower-back-pain', permanent: true },
      { source: '/service/slipped-disc-therapy-malaysia', destination: '/en/conditions/slipped-disc', permanent: true },
      { source: '/service/osteoarthritis-knee-therapy-malaysia', destination: '/en/conditions/osteoarthritis-knee', permanent: true },
      { source: '/service/osteoarthritis-therapy-malaysia', destination: '/en/conditions/osteoarthritis', permanent: true },
      { source: '/service', destination: '/en/conditions', permanent: true },
      
      // New SEO Solution Paths
      { source: '/en/conditions/sport-injury', destination: '/en/solutions/sports-injury', permanent: true },
      { source: '/ms/conditions/sport-injury', destination: '/ms/solutions/sports-injury', permanent: true },
      { source: '/zh/conditions/sport-injury', destination: '/zh/solutions/sports-injury', permanent: true },
      
      { source: '/en/conditions/post-surgery', destination: '/en/solutions/post-surgery-rehab', permanent: true },
      { source: '/ms/conditions/post-surgery', destination: '/ms/solutions/post-surgery-rehab', permanent: true },
      { source: '/zh/conditions/post-surgery', destination: '/zh/solutions/post-surgery-rehab', permanent: true },
      
      { source: '/en/conditions/chronic-pain', destination: '/en/solutions/chronic-pain', permanent: true },
      { source: '/ms/conditions/chronic-pain', destination: '/ms/solutions/chronic-pain', permanent: true },
      { source: '/zh/conditions/chronic-pain', destination: '/zh/solutions/chronic-pain', permanent: true },
    ];
  }
};

export default withNextIntl(nextConfig);
