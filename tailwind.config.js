module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
   variants: {
     extend: {},
   },
   plugins: [],
   extend: {
    backgroundImage: {
      hero: "url('/src/assets/hero.svg')",
    }
   }
 }