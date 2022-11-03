/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        InterRegular: ["Inter-Regular"],
        InterExtraBold: ["Inter-ExtraBold"],
        InterBold: ["Inter-Bold"],
      },
      colors: {
        'box-bg': '#00001A',
        'box-body-text': '#B1B2C6',
        'title-text': '#01001C',
        'body-text': '#44434B',
        'id-grey': '#C7C4CA'
      },
      letterSpacing: {
        tightest: '0.2em',
        tightest_mob: '0.3em'
      }
  },
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },

},
  plugins: [],
}
