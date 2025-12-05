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
    ],
  },

  reactCompiler: true,
};

export default nextConfig;
