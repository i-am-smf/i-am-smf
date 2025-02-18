/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/i-am-smf",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/i-am-smf/",
}

module.exports = nextConfig

