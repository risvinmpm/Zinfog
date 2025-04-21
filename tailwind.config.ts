/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
        },
        screens: {
          xs: '400px',
          '3xl': '1680px',
          '4xl': '2200px',
        },
        maxWidth: {
          '10xl': '1512px',
        },
      },
    },
    plugins: [],
  };