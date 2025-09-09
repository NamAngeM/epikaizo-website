/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Désactiver la collecte de traces pour éviter les erreurs de stack overflow
    outputFileTracingExcludes: {
      '*': ['**/*']
    }
  },
  images: {
    domains: ['localhost', 'strapi.epikaizo.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      {
        source: '/api/cms/:path*',
        destination: `${process.env.STRAPI_URL || 'http://localhost:1337'}/api/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

