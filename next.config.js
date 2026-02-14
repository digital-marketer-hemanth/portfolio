const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Required for Netlify manual/static hosting
  output: "export",

  // ✅ Required because next/image optimization doesn't work in static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
    ],
  },

  // ✅ Your existing SASS config (kept as-is)
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
