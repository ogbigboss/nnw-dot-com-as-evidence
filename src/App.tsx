import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey, pink } from '@mui/material/colors'

import AppBar from './components/AppBar'
import Home from './pages/Home'

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar msg={3} />
      <Home />
      <AppBar />
    </ThemeProvider>
  )
}

export default App
