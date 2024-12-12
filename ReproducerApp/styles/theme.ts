import {darkThemeColors, lightThemeColors} from './colors';
import {sizes} from './typography';

const sharedTheme = {
  fonts: {sizes},
  gap: (v: number) => v * 8,
};

const lightTheme = {
  colors: lightThemeColors,
  ...sharedTheme,
};

const darkTheme: typeof lightTheme = {
  colors: darkThemeColors,
  ...sharedTheme,
};

export const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};
