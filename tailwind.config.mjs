/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "2rem" },
    screens: { sm: "640px", md: "768px", lg: "960px", xl: "1200px" },
    fontFamily: {
      primary: "var(--font-inter)",
    },
    extend: {
      colors: {
        primary: "#22252C",
        secondary: "#3F3250",
        accent: {
          DEFAULT: "#C0B3A0",
          hover: "#ada190",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
