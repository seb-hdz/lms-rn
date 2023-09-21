const dreamKitty = {
  light: {
    pink: "#fb4478", // primary (main)
    blue: "#448fff", // secondary
    red: "#ec6666", // danger
    gray: "#f2f2f2",
    white: "#f6f6f6",
    black: "#403f4c",
    black10: "#f8f9fa",
    black20: "#d9d9db", // borders
    black15: "#e2e2e4", // disabled
    black50: "#868e96",
    black90: "#53525e",
  },
  // TODO: Add dark theme
  dark: {},
};

const palette = dreamKitty.light;

const colorTheme = {
  // background
  primary: palette.pink,
  secondary: palette.blue,
  surface: palette.white,
  surfaceAlt: palette.gray,
  // text - typography
  onSurface: palette.black,
  onPrimary: palette.white,
  danger: palette.red,
  disabled: palette.black15,
  dimmed: palette.black50,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colorTheme,
    },
  },
  plugins: [],
};
