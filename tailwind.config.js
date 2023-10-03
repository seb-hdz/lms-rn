const dreamKitty = {
  light: {
    kPink: "#fb4478", // primary (main)
    kBlue: "#448fff", // secondary
    kRed: "#ec6666", // danger
    kGray: "#f2f2f2",
    kWhite: "#f6f6f6",
    kBlack: "#403f4c",
    kBlack10: "#f8f9fa",
    kBlack20: "#d9d9db", // borders
    kBlack15: "#e2e2e4", // disabled
    kBlack50: "#868e96",
    kBlack90: "#53525e",
  },
  // TODO: Add dark theme
  dark: {},
};

// TODO: switch palette programmatically
const palette = dreamKitty.light;

// TODO: assign colors programmatically
const colorTheme = {
  // background
  primary: palette.kPink,
  secondary: palette.kBlue,
  surface: palette.kWhite,
  surfaceAlt: palette.kGray,
  // text - typography
  onSurface: palette.kBlack,
  onPrimary: palette.kWhite,
  danger: palette.kRed,
  disabled: palette.kBlack15,
  dimmed: palette.kBlack50,
  // borders
  border: palette.kBlack20,
  // colors in general
  ...palette,
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
