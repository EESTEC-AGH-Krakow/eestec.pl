/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        crimson: "#e52a30",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "21xl": "40px",
      "45xl": "64px",
      mini: "15px",
      "13xl": "32px",
      xl: "20px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
