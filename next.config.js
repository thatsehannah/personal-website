const { withPlugins } = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = async (phase) => {
  const nextConfig = {
    reactStrictMode: true,
  };

  const defaultConfig = {};
  return withPlugins([optimizedImages], nextConfig)(phase, { defaultConfig });
};
