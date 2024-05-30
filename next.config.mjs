/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.dianastewartinsurance.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
