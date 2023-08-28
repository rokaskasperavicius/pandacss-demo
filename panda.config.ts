import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    fontFamily: "Fredoka",
    backgroundColor: "neutral.900",
    color: "white",
  },
});

export default defineConfig({
  globalCss,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#fde047" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
