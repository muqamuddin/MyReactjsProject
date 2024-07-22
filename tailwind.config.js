module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        beige: '#FFF3EA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwindcss-rtl'),
  ],
};

     
