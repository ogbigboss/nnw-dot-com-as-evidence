import { Container, Typography } from '@mui/material'
import styled from '@mui/system/styled'

const HeroContainer = styled(Container)({
  paddingTop: 128,
  paddingBottom: 196,
})

const HomeContainer = styled(Container)({
  paddingTop: 96,
  paddingBottom: 128,
})

const About: React.FC = () => (
  <>
    <HeroContainer maxWidth="xl">
      <Typography
        variant="h2"
        sx={{
          mb: 8
        }}
      >
        How to Produce a Higher Ground
      </Typography>
      <Typography
        variant="h4"
      >
        This isn't a pitch, just a realistic vision of the bounds, immediate and long term, of this project
        <br />
        <br />
        That said, if this <em>were</em> a pitch deck, this <em>is</em> what we'd be talking about.
      </Typography>
    </HeroContainer>
  </>
)

export default About
