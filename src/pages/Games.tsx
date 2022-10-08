import Container from '@mui/material/Container'

const Games: React.FC = () => (
  <Container maxWidth="xl">
    Games of a sort
    {/*  TODO: make this cards with MUI stuff etc */}
    <ol>
      <li><em>The Promised Land</em> -- try the <a target="_blank" rel="noreferrer" href="http://playthepromisedland.com/">development build</a> today.</li>
      <li><em>Tower Story</em> -- a 3D Tower builder in the spirit of S*mT*w*r</li>
      <li><em>From the Second Person: The Piano Man</em> -- a robo detective story told from the perspective of the second... person?</li>
      <li><em>Voodoo Trolluhnomics</em> -- what happens when everyone's a data zombie in a cyber dystopia and you're a witch? You deicide!</li>
    </ol>
  </Container>
)

export default Games
