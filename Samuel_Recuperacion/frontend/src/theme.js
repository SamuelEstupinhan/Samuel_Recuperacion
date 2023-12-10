import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
      light: '#7986cb',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f50057'
    },
    background: {
      default: '#f5f5f5',
      paper: '#000000'
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      secondary: '#757575'
    },
    error: {
      main: '#f44336'
    },
    warning: {
      main: '#ff9800',
      contrastText: '#ffffff'
    },
    info: {
      main: '#2196f3'
    },
    success: {
      main: '#4caf50'
    }
  },
  typography: {
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,
    fontFamily: 'Roboto, sans-serif',
    color: '#ffffff',
    h1: {
      fontWeight: 300,
      fontSize: '6rem'
    },
    h6: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: 1.5
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '2.5rem'
    },
    subtitle1: {
      fontSize: '1.25rem'
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.75
    },
    caption: {
      fontSize: '0.875rem'
    }
  }
});

export default theme;
