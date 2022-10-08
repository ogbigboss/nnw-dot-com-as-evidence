import { ThemeProvider, createTheme } from '@mui/material/styles'
import styled from '@mui/system/styled'
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

const SiteContainer = styled('div')({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column"
})

const SiteContent = styled('div')({
  flex: 1
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SiteContainer>
        <AppBar msg="failures in leadership meant you were following the wrong people" />
        <SiteContent>
          <RouterProvider router={router} />
        </SiteContent>
        <AppBar />
      </SiteContainer>
    </ThemeProvider>
  )
}

export default App
