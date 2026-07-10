/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    return [
      { source: "/links", destination: "/external-links", permanent: true },
    ];
  },
};
export default nextConfig;
