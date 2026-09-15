import { AppBar, Button, Container, Link as MUILink, Grid, Toolbar, Typography } from '@mui/material'
import { Link } from "react-router-dom"
import styled from '@mui/system/styled'
import theme from '../theme'

const MsgToolbar = styled(Toolbar)({
  [theme.breakpoints.up("xs")]: {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 0,
    paddingTop: 0,
    paddingBottom: 4,
  }
})

const NNWAppBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  textTransform: "upperCase",
                  fontWeight: "bold",
                }}
              >
                <MUILink component={Link} to="/" color="secondary">
                  New Noise Works
                </MUILink>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{
              [theme.breakpoints.up('md')]: {
                textAlign: 'right'
              }
            }}>
              <Button
                to="/huh-what"
                component={Link}
                color="secondary"
              >FAQ</Button>
              <Button
                to="/games"
                component={Link}
                color="secondary"
              >Games</Button>
              <Button
                to="/about"
                component={Link}
                color="secondary"
              >Who</Button>
              <Button
                to="/support"
                component={Link}
                color="secondary"
              >Pay me</Button>
              <span dangerouslySetInnerHTML={{
                __html: `
                  <!--
                  <Button
                    href="/potential"
                    component={Link}
                    color="secondary"
                  >Old</Button>
                  -->
                `
              }} />
            </Grid>
          </Grid>
        </Toolbar>
        <MsgToolbar>
          <Typography color={theme.palette.secondary.light}>
            <em>failures in leadership meant you were following the wrong people</em>&nbsp;
            -&nbsp;
            <MUILink
              component={Link}
              to="https://twitter.com/newnoiseworks/"
              target="_blank"
              rel="noreferrer"
              color={theme.palette.secondary.light}
            >follow us on twitter today!</MUILink>
          </Typography>
        </MsgToolbar>
      </Container>
    </AppBar>
  )
}

export default NNWAppBar
