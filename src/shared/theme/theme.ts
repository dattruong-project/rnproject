import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";

export const palette = {
  primary: "#0564d4",
  secondary: "#ff6a00",
  background: "#f6f8fa",
  white: "#fff",
  black: "black",
  button: "#f7f7f5",
  shadow: "#757575",
  text: "#0a0808",
  borderColor: "#d0d7de",
  borderColorDark: "white",
  dynamicBlack: "#1c1e21",
  dynamicBackground: "#fff",
  transparent: "transparent",
  buttonText: "#0a0808"
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    buttonText: palette.black
  },
};