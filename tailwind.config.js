/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryAccent: "var(--accent-color)",
        lightAccent: "var(--accent-light-color)",
        secondary: "var(--secondary-color)",
        bodyText: "var(--text-color)",
        headingText: "var(--heading-color)",
        lightSuccess: "var(--success-light-color)",
        success: "var(--success-color)",
        borderLight: "var(--border-light-color)",
        card: "var(--background-color)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
      },
    },
  },
  plugins: [],
};
