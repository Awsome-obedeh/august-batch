/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;
