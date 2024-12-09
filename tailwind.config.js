const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        main: '#F1ECE6',
        lightblue: '#76B7CD',
        orange: '#D98326',
        dark: '#323232',
        light: '#C2C2C2',
      },
      screens: {
        sm: '400px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
