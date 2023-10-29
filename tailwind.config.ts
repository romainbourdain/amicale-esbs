/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        app: {
          DEFAULT: "var(--orange-1)",
          gray: "var(--sand-1)",
        },
        subtle: {
          DEFAULT: "var(--orange-2)",
          gray: "var(--sand-2)",
        },
        ui: {
          DEFAULT: "var(--orange-3)",
          gray: "var(--sand-3)",
          facebook: "var(--blue-3)",
          instagram: "var(--tomato-3)",
        },
        "ui-hover": {
          DEFAULT: "var(--orange-4)",
          gray: "var(--sand-4)",
          facebook: "var(--blue-4)",
          instagram: "var(--tomato-4)",
        },
        "ui-active": {
          DEFAULT: "var(--orange-5)",
          gray: "var(--sand-5)",
        },
        "fg-subtle": {
          DEFAULT: "var(--orange-6)",
          gray: "var(--sand-6)",
        },
        "fg-ui": {
          DEFAULT: "var(--orange-7)",
          gray: "var(--sand-7)",
          facebook: "var(--blue-7)",
          instagram: "var(--tomato-7)",
        },
        "fg-ui-hover": {
          DEFAULT: "var(--orange-8)",
          gray: "var(--sand-8)",
          facebook: "var(--blue-8)",
          instagram: "var(--tomato-8)",
        },
        solid: {
          DEFAULT: "var(--orange-9)",
          gray: "var(--sand-9)",
        },
        "solid-hover": {
          DEFAULT: "var(--orange-10)",
          gray: "var(--sand-10)",
        },
        lc: {
          DEFAULT: "var(--orange-11)",
          gray: "var(--sand-11)",
          facebook: "var(--blue-11)",
          instagram: "var(--tomato-11)",
        },
        hc: {
          DEFAULT: "var(--orange-12)",
          gray: "var(--sand-12)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
