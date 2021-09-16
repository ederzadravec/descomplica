import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Default } from 'templates';
import theme from 'assets/theme';

import Routes from './Routes';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Open Sans';
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    color: ${({ theme }) => theme.palette.text.dark};
  }

  html {
    height: 100vh;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    border: 0;
  };

  #root {
    min-height: 100vh;
    display: flex;
  }

  div, span, section {
    display: flex;
    flex-direction: row;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Default>
        <Routes />
      </Default>
    </ThemeProvider>
  );
};

export default App;
