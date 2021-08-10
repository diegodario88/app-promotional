import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F57C00',
      light: '#F5A15C',
      dark: '#EF6C00'
    },
    secondary: {
      main: '#F7B985',
      light: '#F28933',
      dark: '#8F4100'
    },
    background: {
      paper: '#FFFFFF'
    },
    text: {
      primary: '#3E3E3E'
    }
  }
});

export default theme;
