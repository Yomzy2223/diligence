/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "nigerianbanks.xyz",
      },
    ],
    domains: ["res.cloudinary.com"],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
