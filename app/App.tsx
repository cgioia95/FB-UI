// client/App.tsx
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import theme from './helpers/theme';
import { AppRouter } from './containers/Router/Router';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
};

export default App;
