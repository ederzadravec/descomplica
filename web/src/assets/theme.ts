import { DefaultTheme } from 'styled-components';

const text = {
  dark: '#333',
  light: '#fafafa',
};

const theme: DefaultTheme = {
  palette: {
    text,
    primary: {
      main: '#aaa',
      text: '#bbb',
    },
    success: {
      main: '#2ABC85',
      text: text.light,
    },
    info: {
      main: '#00ADEF',
      text: text.light,
    },
    error: {
      main: '#FF979E',
      text: text.light,
    },
    disabled: {
      main: '#aaa',
      text: text.light,
    },
  },
  screens: {
    xs: (data: string) => `@media only screen and (max-width: 600px) { ${data} }`,
    sm: (data: string) => `@media only screen and (min-width: 600px) { ${data} }`,
    md: (data: string) => `@media only screen and (min-width: 768px)  { ${data} }`,
    lg: (data: string) => `@media only screen and (min-width: 992px) { ${data} }`,
    xl: (data: string) => `@media only screen and (min-width: 1200px) { ${data} }`,
  },
};

export default theme;
