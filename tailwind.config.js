/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        os: ["Readex Pro", "sans-serif"],
      },
      fontWeight:{
        thin: "100",
        normal: "400",
        bold: "700",
        extraBold: "800",
        black: "900"
      }
    },
  },
  plugins: [],
};
