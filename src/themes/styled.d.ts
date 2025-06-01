import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      tertiary: string;
      textPrimary: string;
      textSecondary: string;
      hover: string;
      error: string;
      success: string;
      border: string;
      tecnoVesteCast: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      link: string;
      buttonText: string;
      disabled: string;
      active: string;
    };
    fonts: {
      sizes: {
        mobile: {
          s: string;
          m: string;
          l: string;
        };
        desktop: {
          s: string;
          m: string;
          l: string;
          xl: string;
        };
      };
      weights: {
        regular: number;
        bold: number;
        light: number;
        semibold: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
    zIndex: {
      modal: number;
      overlay: number;
      dropdown: number;
      tooltip: number;
      base: number;
    };
  }

  const theme: Theme;
  export default theme;
}
