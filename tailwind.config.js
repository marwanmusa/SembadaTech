/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1a365d",
        slate: {
          950: "#0f1720",
          900: "#17212f",
          800: "#243447",
          700: "#4a5568",
          500: "#94a3b8",
          300: "#cbd5e1",
          100: "#f1f5f9"
        },
        accent: "#ed8936"
      },
      boxShadow: {
        panel: "0 24px 60px rgba(15, 23, 32, 0.28)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"]
      }
    }
  },
  plugins: []
};
