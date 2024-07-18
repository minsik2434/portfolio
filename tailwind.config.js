/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    screens: {
      tablet: { min: "768px", max: "1024px" },
      mobile: { min: "320px", max: "767px" },
    },
    extend: {},
    fontFamily: {
      NotoSansKR_Light: ["NotoSansKR-Light"],
    },
  },
  plugins: [],
};
