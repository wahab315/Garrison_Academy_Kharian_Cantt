import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          900: "#15301a", 800: "#1c4326", 700: "#235230",
          600: "#2f6b3d", 500: "#3d7d4b",
        },
        gold: {
          600: "#a5732f", 500: "#c08a3e", 400: "#d4a24c", 300: "#e6c684",
        },
        flame: "#e8633a",
        cream: "#f7f3e9",
        paper: "#fffdf7",
        ink: "#1b211b",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        insc: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        urdu: ["var(--font-naskh)", "serif"],
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
export default config;
