/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add i18n support
  i18n: {
    locales: ['bg', 'en'],
    defaultLocale: 'bg',
    // Disable automatic browser locale detection to avoid redirects from `/` to `/en`
    localeDetection: false,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
