/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#C778DD",
      gray: "#ABB2BF",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    backgroundColor: {
      dark: "#282C33",
      darker: "#1a1f2e",
      light_primary: "rgba(199, 120, 221, 0.12)",
      primary: "#C778DD",
      gray: "#ABB2BF",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    borderColor: {
      primary: "#C778DD",
      gray: "#ABB2BF",
      white: "#fff",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
