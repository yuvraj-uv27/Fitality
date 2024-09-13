/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MonumentExtended-Regular', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
