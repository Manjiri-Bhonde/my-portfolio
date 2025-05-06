/** @type {import('next').NextConfig} */
const nextConfig ={
    output: 'export',
    images: {
      unoptimized: true,
    },
    // IMPORTANT
    basePath: '/my-portfolio',
    assetPrefix: '/my-portfolio',
  };

export default nextConfig;
