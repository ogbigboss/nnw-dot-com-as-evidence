import createTheme from '@mui/material/styles/createTheme'
import { grey, pink } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: pink[300],
    },
  },
})

export default theme
