import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Default } from 'templates';
import theme from 'assets/theme';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Default>
        <Routes />
      </Default>
    </ThemeProvider>
  );
};

export default App;
