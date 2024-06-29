/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translate(5px)" },
          "50%": { transform: "translate(-5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 150ms ease-in-out",
      },
    },
  },
  plugins: [],
};
