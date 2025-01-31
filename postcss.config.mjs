/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'autoprefixer': {},
    '@tailwindcss/postcss': {} // Add this line
  },
};

export default config;
