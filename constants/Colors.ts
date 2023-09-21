const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

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
  // TODO: actualizar nombres de dark theme
  dark: {
    primary: "#1971c2",
    secondary: "#ff66a3",
    primaryLight: "#a4d3ff",
    success: "#4caf50",
    danger: "#f44336",
    onDanger: "#e53935",
    disabled: "#e0e0e0",
    surface: "#303030",
    dimmed: "#bdbdbd",
  },
};

const palette = dreamKitty.light;

export const theme = {
  primary: palette.pink,
  secondary: palette.blue,
  surface: palette.white,
  surfaceAlt: palette.gray,
  onSurface: palette.black,
  danger: palette.red,
  disabled: palette.black15,
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
