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
        alpha: '#2cb67d',
        bravo: '#7f5af0',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.35,0.78,0.57,1.41)',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
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
  plugins: [require('@tailwindcss/container-queries')],
};
