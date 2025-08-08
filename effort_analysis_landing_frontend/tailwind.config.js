module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#0F172A",
        accent: "#F59E42",
        background: "#0F172A",
        text: "#F4F4F5",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        fancy: "0 4px 32px 0 rgba(59,130,246,.14)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
