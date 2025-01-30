/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
        lg: "100px",
        xl: "80px",
      },
    },
    extend: {
      fontFamily: {
        "just-sans": ["var(--font-just-sans)", "sans"],
      },
      colors: {
        background: "var(--background)",
        light: "#ECF6FE",
        "light-hover": "#E2F1FE",
        "light-active": "#C3E2FC",
        normal: "#3FA2F6",
        "normal-hover": "#3992DD",
        "normal-active": "#3282C5",
        dark: "#2F7AB9",
        "dark-hover": "#266194",
        "dark-active": "#1C496F",
        darker: "#163956",
      },
    },
  },
  plugins: [],
};
