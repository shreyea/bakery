/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Photos are pre-sized WebP files in /public/images, so skip the optimiser.
    unoptimized: true,
  },
};

export default nextConfig;
