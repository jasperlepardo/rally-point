/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1900px',
    },
    extend: {
      colors: {
        blue: {
          '50': '#f3f7fc',
          '100': '#e6eef8',
          '200': '#c6dcf1',
          '300': '#94c0e5',
          '400': '#5b9ed5',
          '500': '#3682c1',
          '600': '#2666a3',
          '700': '#1f5080',
          '800': '#1e476e',
          '900': '#1e3c5c',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
          '@screen 3xl': {
            maxWidth: '1440px',
          },
          '@screen 4xl': {
            maxWidth: '1520px',
          },
        },
      })
    },
  ],
}
