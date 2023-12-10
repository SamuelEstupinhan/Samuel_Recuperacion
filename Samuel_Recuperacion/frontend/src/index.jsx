//Samuel Ortega
import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './App';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>
);
