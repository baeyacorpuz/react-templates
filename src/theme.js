import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightBold: '600',
    body1: {
      fontSize: 16,
      lineHeight: '1.5',
    },
    body2: {
      fontSize: 14,
      lineHeight: '1.5',
    },
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.125rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1rem',
    },
    caption: {
      fontSize: 12
    }
  },
  palette: {
    common: {
      white: '#fff',
      black: '#2F3542',
    },
    type: 'light',
    primary: {
      light: '#9dd6bd',
      main: '#41B67F',
      dark: '#33a16e',
    },
    secondary: {
      main: '#1F236F',
    },
    error: {
      light: '#f5cfd1',
      main: '#FA5656',
    },
    warning: {
      main: '#F8B344',
    },
    text: {
      primary: '#2F3542',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        borderRadius: "0%"
      }
    },
    MuiTab: {
      root: {
        fontSize: 14,
        // '@media (min-width: 600px)': {
        //   minWidth: "auto"
        // }
      },
      // wrapper: {
      //   display: 'flex',
      //   alignItems: 'flex-start',
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignContent: "flex-start"
      // }
    },
    MuiButton: {
      root: {
        minWidth: 150
      },
      contained: {
        boxShadow: "none"
      },
      containedPrimary: {
        color: "#fff"
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#fff"
      }
    },
    MuiCard: {
      root: {
        marginBottom: 25
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12
      }
    }
  }
})

export default responsiveFontSizes(theme)