/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        zain: ["var(--font-zain)", "sans-serif"],
        almarai: ["var(--font-almarai)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        content: "#093143",
        main: "#E1F2F0",
        "submit-button": "#01797B",
      },
    },
  },
  plugins: [],
};
