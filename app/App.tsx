// client/App.tsx
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { AppRouter } from './containers/Router';
import theme from './helpers/theme';
import { CssBaseline } from '@mui/material';



const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
};

export default App;
