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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            h1: {
              fontSize: theme("fontSize.h1")[0],
              lineHeight: theme("fontSize.h1")[1].lineHeight,
              fontWeight: theme("fontSize.h1")[1].fontWeight,
              color: theme("colors.primary"),
              marginTop: "0",
              marginBottom: theme("spacing.6"),
            },
            h2: {
              fontSize: theme("fontSize.h2")[0],
              lineHeight: theme("fontSize.h2")[1].lineHeight,
              fontWeight: theme("fontSize.h2")[1].fontWeight,
              color: theme("colors.primary"),
              marginTop: theme("spacing.10"),
              marginBottom: theme("spacing.4"),
            },
            h3: {
              fontSize: theme("fontSize.2xl")[0],
              lineHeight: theme("lineHeight.tight"),
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.primary"),
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.3"),
            },
            h4: {
              fontSize: theme("fontSize.xl")[0],
              lineHeight: theme("lineHeight.snug"),
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.primary"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.2"),
            },
            p: {
              fontSize: theme("fontSize.body")[0],
              lineHeight: theme("fontSize.body")[1].lineHeight,
              marginTop: "0",
              marginBottom: theme("spacing.4"),
            },
            ul: {
              marginTop: "0",
              marginBottom: theme("spacing.4"),
              paddingLeft: theme("spacing.6"),
            },
            ol: {
              marginTop: "0",
              marginBottom: theme("spacing.4"),
              paddingLeft: theme("spacing.6"),
            },
            li: {
              marginTop: theme("spacing.1"),
              marginBottom: theme("spacing.1"),
            },
            a: {
              color: theme("colors.accent"),
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              fontWeight: theme("fontWeight.medium"),
              transition: "opacity 150ms ease",
              "&:hover": {
                opacity: "0.8",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
