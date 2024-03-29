import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    common: {
      base: '#303030',
      nav: {
        appBar: '#303030',
        footer: '#303030',
      },
    },
    primary: {
      main: '#d2be99',
    },
    secondary: {
      main: '#565151',
    },
    background: {
      landing: '/assets/backgrounds/landingDark.jpeg',
      mobileLanding: '/assets/backgrounds/landingDarkMobile.jpeg',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Archivo Black',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Rubik',
    },
    h4: {
      fontFamily: 'Archivo Black',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Archivo Black',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'Rubik',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Rubik',
      fontSize: '1.5rem',
    },
    subtitle2: {
      fontFamily: 'Rubik',
      fontSize: '1.1em',
    },
    body1: {
      fontFamily: 'Rubik',
      fontSize: '1.1em',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Rubik',
      fontSize: '1.15rem',
      fontWeight: 300,
    },
  },
});

export default theme;
