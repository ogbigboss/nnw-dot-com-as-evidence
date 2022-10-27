import createTheme from '@mui/material/styles/createTheme'
import { grey, pink, green } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: pink[300],
    },
    success: {
      main: green[300],
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          // textDecorationColor: green[500],
          // textDecorationColor: 'rgba(76, 175, 80, 0.66)',
          textDecorationColor: green[300],
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: green[100],
          borderRadius: 0
        }
      }
    }
  }
})

export default theme
