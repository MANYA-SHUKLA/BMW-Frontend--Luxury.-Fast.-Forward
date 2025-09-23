import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.motor.es',
      },
      {
        protocol: 'https',
        hostname: 's.yimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bmw.in',
      },
      {
        protocol: 'https',
        hostname: 'img.autocarindia.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.bigboytoyz.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.team-bhp.com',
      },
      {
        protocol: 'https',
        hostname: 'i.cdn.newsbytesapp.com',
      },
      {
        protocol: 'https',
        hostname: 'motorz.me',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'bmw.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'stimg.cardekho.com', 
      },
    ],
  },
};

export default nextConfig;