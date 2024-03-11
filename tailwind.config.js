/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Default: 640px
      md: "744px", // Customize to 750px
      lg: "1024px", // Default: 1024px
      xl: "1280px", // Default: 1280px
      "2xl": "1536px", // Default: 1536px
    },
    extend: {
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
