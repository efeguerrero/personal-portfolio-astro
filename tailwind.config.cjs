/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#242629',
        darkBlack: '#16161a',
        gray: '#94a1b2',
        grayLight: '#cad0d9',
        grayDark: '#76818e',
        alpha: '#2cb67d',
        bravo: '#7f5af0',
        bravoDark: '#593fa8',
        bravoDarkest: '#332460',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.35,0.78,0.57,1.41)',
      },
    },
    fontFamily: {
      // anton: ['Anton', 'sans-serif'],
      // roboto: ['Roboto', 'sans-serif'],
    },

    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '2rem',

      // default breakpoints but with 40px removed
      // screens: {
      //   // sm: '600px',
      //   md: '700px',
      //   lg: '950px',
      //   xl: '1200px',
      //   '2xl': '1400px',
      //   '3xl': '1500px',
      // },
    },
  },
  plugins: [],
};
