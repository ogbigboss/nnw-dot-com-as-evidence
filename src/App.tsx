import ThemeProvider from '@mui/material/styles/ThemeProvider'
import styled from '@mui/system/styled'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import theme from './theme'
import AppBar from './components/AppBar'
import FooterBar from './components/FooterBar'
import Home from './pages/Home'
import HuhWhat from './pages/WhatHowWhyNotYeahOK'
import Games from './pages/Games'
import About from './pages/About'
import Support from './pages/Support'
import Potential from './pages/Potential'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <AppBar />
      <Potential />
    </div>
  },
  {
    path: "/huh-what",
    element: <div>
      <AppBar />
      <HuhWhat />
    </div>
  },
  {
    path: "/games",
    element: <div>
      <AppBar />
      <Games />
    </div>
  },
  {
    path: "/about",
    element: <div>
      <AppBar />
      <About />
    </div>
  },
  {
    path: "/support",
    element: <div>
      <AppBar />
      <Support />
    </div>
  },
  {
    path: "/potential",
    element: <div>
      <AppBar />
      <Home />
    </div>
  }
], {
  basename: "/nnw-dot-com-as-evidence"
})

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
        <SiteContent>
          <RouterProvider router={router} />
        </SiteContent>
        <FooterBar />
      </SiteContainer>
    </ThemeProvider>
  )
}

export default App
