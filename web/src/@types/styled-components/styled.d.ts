import 'styled-components';

declare module 'styled-components' {
  interface IPalleteColor {
    main: string;
    text: string;
  }

  export interface DefaultTheme {
    palette: {
      text: {
        light: string;
        dark: string;
      };
      primary: IPalleteColor;
      success: IPalleteColor;
      info: IPalleteColor;
      error: IPalleteColor;
      disabled: IPalleteColor;
    };
    screens: {
      xs: (data: string) => string;
      sm: (data: string) => string;
      md: (data: string) => string;
      lg: (data: string) => string;
      xl: (data: string) => string;
    };
  }
}
