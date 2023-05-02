/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // => incompatible avec l'optimization d'image de nextjs
  images: {
    unoptimized: true
  }

}

module.exports = nextConfig
