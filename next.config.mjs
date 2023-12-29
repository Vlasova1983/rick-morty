/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    domains:['rickandmortyapi.com']
  },
  assetPrefix: './',
};

export default nextConfig;