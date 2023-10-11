/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      fontFamily: {
        IbmPlex: ['Ibm Plex Sans', ' sans-serif'],
        Merriweather: ['Merriweather', ' serif'],
      },
    },
  },
  plugins: [],
}

