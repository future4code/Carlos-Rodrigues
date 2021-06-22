import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme'
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
