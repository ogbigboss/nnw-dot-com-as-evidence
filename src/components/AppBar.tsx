import { AppBar, Button, Container, Link, Toolbar, Typography } from '@mui/material'

interface NNWAppBarProps {
  msg?: number
}

const jokes = [
  <>making better things possible by first admitting (admissably) they are indeed possible</>,
  <>not (just) whining about the "other side" since 1986</>,
  <>now entering an emotionally fascist website! there may be accidents...</>,
  <>pointing out that failures in leadership meant you were following the wrong people</>
]

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * (jokes.length - 1))]
}

const NNWAppBar: React.FC<NNWAppBarProps> = ({ msg }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button href="/" color="secondary" component={Link}>
            <Typography
              variant="h6"
              component="h1"
            >
              New Noise Works - <small><em>{msg ? jokes[msg] : getRandomJoke()}</em></small>
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NNWAppBar
