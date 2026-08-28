/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freeiconspng.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'logident.es',
      },
      {
        protocol: 'https',
        hostname: 'www.dentalcost.es',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vostars.eu',
      },
      {
        protocol: 'https',
        hostname: 'www.dynamiquedentaire.com',
      },
      {
        protocol: 'https',
        hostname: 'www.xector.net',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'www.vatech.com',
      },
    ],
  },
};

export default nextConfig;