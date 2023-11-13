/** @type {import('next').NextConfig} */
const nextConfig = {
    
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
      use: ['raw-loader'],
      })
      return config
    },
    experimental: {
      serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    transpilePackages: ['three'],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
      ],
    },
  };
  
  module.exports = nextConfig;