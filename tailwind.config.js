/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "donate-bg":"url(./src/assets/images/charityBg.png)"
      },
    },
    colors: {
      green: "#008500",
      white: "#ffffff",
      black: "#000000",
      primary: "#25a9e1",
      secondary: "#ED4137",
      blue: "#3EC1D3",
      pink:"#FF165D",
      brown:"#FF9A00",
      lightSkin:"#F6F7D7"
    },
  },
  plugins: [],
};
