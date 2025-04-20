/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backGroundImage:{
        banner: "url('./src/assets/bannerImage.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

