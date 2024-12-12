const pallete = {
  white: '#FFFFFF',
  black: '#000000',
  primaryWhite: '#e7e5e8',
  primaryBlack: '#01080a',
  deepRed: '#FF0000',
  black1: '#202020',
  grey1: '#e3e3e3',
  grey2: '#424242',
};

const sharedColors = {
  separator: pallete.primaryBlack,
  error: pallete.deepRed,
};

export const lightThemeColors = {
  ...sharedColors,
  backgroundColor: pallete.white,
  backgroundColorBlack: pallete.primaryBlack,
  placeholder: pallete.grey2,

  tab: {
    background: pallete.primaryWhite,
    active: pallete.black1,
    inactive: pallete.grey2,
  },

  input: {
    background: pallete.primaryWhite,
    border: pallete.primaryBlack,
  },

  texts: {
    main: pallete.primaryBlack,
    link: pallete.primaryWhite,
    error: sharedColors.error,
  },

  buttons: {
    primary: pallete.primaryWhite,
    secondary: pallete.black1,
    success: pallete.grey2,
    danger: pallete.deepRed,
  },
};

export const darkThemeColors: typeof lightThemeColors = {
  ...sharedColors,
  backgroundColor: pallete.primaryBlack,
  backgroundColorBlack: pallete.primaryWhite,
  placeholder: pallete.grey2,

  tab: {
    background: pallete.primaryBlack,
    active: pallete.white,
    inactive: pallete.primaryWhite,
  },

  input: {
    background: pallete.primaryBlack,
    border: pallete.primaryWhite,
  },

  texts: {
    main: pallete.primaryWhite,
    link: pallete.primaryBlack,
    error: sharedColors.error,
  },

  buttons: {
    primary: pallete.deepRed,
    secondary: pallete.grey2,
    success: pallete.black1,
    danger: pallete.primaryWhite,
  },
};
