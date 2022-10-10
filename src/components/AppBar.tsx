import { AppBar, Button, Container, Link, Grid, Toolbar, Typography } from '@mui/material'
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
                <Link href="/" color="secondary">
                  New Noise Works
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{
              [theme.breakpoints.up('md')]: {
                textAlign: 'right'
              }
            }}>
              <Button
                href="/huh-what"
                component={Link}
                color="secondary"
              >FAQ</Button>
              <Button
                href="/games"
                component={Link}
                color="secondary"
              >Games</Button>
              <Button
                href="/about"
                component={Link}
                color="secondary"
              >Who</Button>
              <Button
                href="/support"
                component={Link}
                color="secondary"
              >Pay me</Button>
              <Button
                href="/potential"
                component={Link}
                color="secondary"
              >Old</Button>
            </Grid>
          </Grid>
        </Toolbar>
        <MsgToolbar>
          <Typography color={theme.palette.secondary.light}>
            <em>failures in leadership meant you were following the wrong people</em>&nbsp;
            -&nbsp;
            <Link
              href="https://twitter.com/newnoiseworks/"
              target="_blank"
              rel="noreferrer"
              color={theme.palette.secondary.light}
            >follow us on twitter today!</Link>
          </Typography>
        </MsgToolbar>
      </Container>
    </AppBar>
  )
}

export default NNWAppBar
