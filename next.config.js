/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    //  { protocol: "https", hostname: "vmyqkspfxrzxteohsrbk.supabase.co" },
    ],
    domains: ["cdn.sanity.io"],
    loader: "custom",
    loaderFile: "./lib/providers/sanity/imageLoader.tsx",
  },
}

module.exports = nextConfig
