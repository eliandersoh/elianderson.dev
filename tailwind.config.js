/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "768px",
          xl: "768px",
          "2xl": "768px",
        },
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
