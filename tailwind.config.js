/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sansita: ["Sansita", "sans-serif"],
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
    },
    extend: {},
  },
  plugins: [],
};

// font-family: "Sansita", sans-serif;
