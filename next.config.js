/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    //  { protocol: "https", hostname: "vmyqkspfxrzxteohsrbk.supabase.co" },
    ],
    loader: "custom",
    loaderFile: "./lib/providers/sanity/imageLoader.tsx",
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/twinnytwin22",
        permanent: true,
      },
      // Retired static resume files → the live PDF generated from Sanity.
      ...[
        "/Randal Herndon 2025 - DMM.pdf",
        "/Randal-H-Resume.pdf",
        "/Randal-Herndon-Resume-2025.pdf",
        "/resume",
      ].map((source) => ({
        source: encodeURI(source),
        destination: "/api/cv",
        permanent: false,
      })),
    ]
  },
}

module.exports = nextConfig
