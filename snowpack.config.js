// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    public: '/',
  },
  plugins: [
    ['@snowpack/plugin-webpack'],
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
        transformOptions: {
          // babel transform options
        },
      },
    ],
  ],
  packageOptions: {},
  exclude: ['**/node_modules/**/*', 'LICENSE', '**/package*.json', 'README.md'],
  devOptions: {
    port: 4000,
  },
  buildOptions: {},
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
