/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "prime": "#BADFE7",
          "secondary": "#4A7B5C",
          "yellow": "#C3B995",
          "quaternary": "#C3B995",
          "smokewhite": "#F6F6F2",
        },
      },
      "dark",
      "forest",
    ],
  },

  theme: {
    extend: {
      spacing: {
        '1/1.618': '61.8%', // Add the Golden Ratio spacing
      },
    },
  },

  plugins: [require("daisyui")],
};
