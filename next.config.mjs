/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // App Router i18n is handled via route segments (e.g. `[lang]`) instead of `i18n` config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

