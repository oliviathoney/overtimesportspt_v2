const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4D734F",
        secondaryColor: "rgb(var(--accent) / <alpha-value>)",
        highlightColor: "rgb(var(--highlight) / <alpha-value>)",
        primaryText: "rgb(var(--text) / <alpha-value>)",
        secondaryText: "rgb(var(--text-muted) / <alpha-value>)",
        bgNight: "rgb(var(--surface-night) / <alpha-value>)",
        bgDark1: "rgb(var(--surface-1) / <alpha-value>)",
        bgDark2: "rgb(var(--surface-2) / <alpha-value>)",
        bgDark3: "rgb(var(--surface-3) / <alpha-value>)",
        bgDark3Hover: "rgb(var(--surface-hover) / <alpha-value>)",
        bgDarkTransparent: "rgb(var(--surface-1) / 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
        bgDarkTransparentLighter: "rgb(var(--surface-3) / var(--surface-translucent-opacity))",
        mainBorder: "rgb(var(--border) / var(--border-opacity))",
        mainBorderDarker: "rgb(var(--border) / var(--border-subtle-opacity))",
        quoteIconColor: "rgb(var(--quote) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
};
