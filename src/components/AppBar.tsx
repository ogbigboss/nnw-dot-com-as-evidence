import { AppBar, Button, Container, Link, Toolbar, Typography } from '@mui/material'

const NNWAppBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href="/" color="secondary" component={Link}>
            <Typography
              variant="h6"
              component="h1"
            >
              New Noise Works - <small><em>failures in leadership meant you were following the wrong people</em></small>
            </Typography>
          </Button>
          <Button
            href="/huh-what"
            component={Link}
            color="secondary"
            sx={{
              ml: 'auto'
            }}
          >Details</Button>
          <Button
            href="/potential"
            component={Link}
            color="secondary"
          >Potential</Button>
          <Button
            href="/games"
            component={Link}
            color="secondary"
          >Games</Button>
          <Button
            href="/about"
            component={Link}
            color="secondary"
          >Whomst</Button>
          <Button
            href="/support"
            component={Link}
            color="secondary"
          >Pay me</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NNWAppBar
