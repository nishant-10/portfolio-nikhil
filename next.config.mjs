/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Ignores ESLint errors during builds
      ignoreDuringBuilds: true,
    },
    webpack: (config, { isServer }) => {
      // Example: Add custom Webpack configurations
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false, // Example: Ignore 'fs' module for client-side builds
        };
      }
      return config;
    },
    images: {
      // Enable remote image optimization
      remotePatterns: [
        {
          protocol: "https",
          hostname: "example.com", // Replace with your image source domain
          port: "",
          pathname: "/**",
        },
      ],
    },
    reactStrictMode: true, // Enable React strict mode
  };
  
  export default nextConfig;
  