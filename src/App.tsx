import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey, pink } from '@mui/material/colors'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppBar from './components/AppBar'
import Home from './pages/Home'
import HuhWhat from './pages/WhatHowWhyNotYeahOK'
import Games from './pages/Games'
import About from './pages/About'
import Support from './pages/Support'

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/huh-what",
    element: <HuhWhat />
  },
  {
    path: "/games",
    element: <Games />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/support",
    element: <Support />
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar msg="pointing out that failures in leadership meant you were following the wrong people" />
      <RouterProvider router={router} />
      <AppBar />
    </ThemeProvider>
  )
}

export default App
