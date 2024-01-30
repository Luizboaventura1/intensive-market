/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-color': "#202024",
      'secondary-color': "#121214",
      'third-color': "#724ff0",
      'white-text': "#e3e3e3",
      'subtitle-color': "#a8a8a8"
    },
    extend: {},
  },
  plugins: [],
}

