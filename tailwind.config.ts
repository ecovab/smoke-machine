import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#07070a",
          900: "#0c0c10",
          800: "#131317",
          700: "#1c1c22",
        },
        smoke: {
          400: "#8b8b94",
          300: "#a8a8b0",
          200: "#c7c7cd",
        },
        amber: {
          400: "#e8a35b",
          500: "#d68f3e",
          600: "#b8752b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, rgba(232,163,91,0.15) 0%, rgba(0,0,0,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
