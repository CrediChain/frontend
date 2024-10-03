/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: false,
    experimental: {
      serverComponentsExternalPackages: ['lucide'],
    },
  };
  
  export default nextConfig;