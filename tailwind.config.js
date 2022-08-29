const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ...defaultTheme,
    // ***************************** //
    // ******* Font Family ********* //
    // ***************************** //
    fontFamily: {
      sans: ["Inter var", "Inter", "sans-serif"],
    },
    // ***************************** //
    // ********* Container ********* //
    // ***************************** //
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2.5rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
      },
    },
    // ***************************** //
    // ********** Colors *********** //
    // ***************************** //
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      disabled: "#B0B7C3",
      light: "#A7AAB0",
      medium: "#505256",
      dark: "#0A1F44",
      gray: {
        900: "#8A94A6",
        800: "#98A1B1",
        700: "#A7AEBB",
        600: "#B0B7C3",
        500: "#C9CED6",
        400: "#E1E4E8",
        300: "#F1F2F4",
        200: "#F7F8F9",
        100: "#FAFBFB",
      },
      black: {
        default: "#000000",
        900: "#0A1F44",
        800: "#14284B",
        700: "#283A5B",
        600: "#364766",
        500: "#455571",
        400: "#4E5D78",
        300: "#596780",
        200: "#627088",
        100: "#717D92",
      },
      brand: {
        900: "#000477",
        800: "#080EAF",
        700: "#2026D2",
        600: "#4A4FE9",
        500: "#696DEF",
        400: "#8A8EF8",
        300: "#BDBFFD",
        200: "#DFE0FF",
        100: "#F2F3FE",
      },
      outline: {
        xlight: "#F1F2F4",
        light: "#E1E4E8",
        medium: "#C9CED6",
        dark: "#B0B7C3",
      },
    },
    // ***************************** //
    // ********** Spacing ********** //
    // ***************************** //
    spacing: {
      0: "0",
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
      80: "5rem",
      96: "6rem",
      112: "7rem",
      144: "9rem",
      240: "15rem",
      320: "20rem",
      560: "35rem",
      full: "100%",
    },
    // ***************************** //
    // ********** Max Width ********** //
    // ***************************** //
    maxWidth: ({ theme }) => ({
      ...theme("spacing"),
    }),
    // ***************************** //
    // ********** Min Width ********** //
    // ***************************** //
    minWidth: ({ theme }) => ({
      ...theme("spacing"),
    }),
    // ***************************** //
    // ********* Font Size ********* //
    // ***************************** //
    fontSize: {
      overline: [
        "10px",
        [
          "1.6em",
          {
            letterSpacing: "0.04em",
          },
        ],
      ],
      caption2: ["10px", "1.6em"],
      caption1: ["12px", "1.667em"],
      body: ["14px", "1.714em"],
      subheader: ["16px", "1.75em"],
      title: ["20px", "1.6"],
      heading2: ["24px", "1.667"],
      heading1: ["28px", "1.428"],
      display6: ["36px", "1.333"],
      display5: [
        "48px",
        [
          "1.167em",
          {
            letterSpacing: "-0.01em",
          },
        ],
      ],
      display4: [
        "56px",
        [
          "1.143em",
          {
            letterSpacing: "-0.01em",
          },
        ],
      ],
      display3: [
        "66px",
        [
          "1.09em",
          {
            letterSpacing: "-0.01em",
          },
        ],
      ],
      display2: [
        "80px",
        [
          "1em",
          {
            letterSpacing: "-0.02em",
          },
        ],
      ],
      display1: [
        "96px",
        [
          "1em",
          {
            letterSpacing: "-0.01em",
          },
        ],
      ],
    },
    // ***************************** //
    // ********* Box Shadow ******** //
    // ***************************** //
    boxShadow: {
      0: "none",
      1: "0px 1px 1px rgba(0, 0, 0, 0.08)",
      2: "0px 2px 3px rgba(0, 0, 0, 0.08)",
      3: "0px 4px 5px -1px rgba(0, 0, 0, 0.08)",
      4: "0px 6px 7px -1px rgba(0, 0, 0, 0.08)",
      5: "0px 8px 11px -3px rgba(0, 0, 0, 0.08)",
      6: "0px 12px 19px -5px rgba(0, 0, 0, 0.08)",
      7: "0px 16px 25px -7px rgba(0, 0, 0, 0.1)",
      8: "0px 24px 33px -9px rgba(0, 0, 0, 0.1)",
      9: "0px 40px 55px -11px rgba(0, 0, 0, 0.12)",
      "focus-primary":
        "0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #DFE0FF",
    },
    extend: {},
  },
  plugins: [],
};
