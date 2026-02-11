/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#f79ac0",
        neutral: "#f1d3b2",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        sectionVertical: "6rem",
        containerPadding: "1.5rem",
      },
    },
  },
  plugins: [],
}
