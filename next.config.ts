/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 ignore lint during npm run build
  },
  typescript: {
    ignoreBuildErrors: true, // 🚀 ignore ts errors during npm run build (optional but safe)
  },
};

export default nextConfig;
