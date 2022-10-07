import { Container, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { pink } from '@mui/material/colors'

const HeroContainer = styled(Container)({
  paddingTop: 128,
  paddingBottom: 196,
})

const HomeContainer = styled(Container)({
  paddingTop: 96,
  paddingBottom: 128,
})

interface YakBlockProps {
  header: React.ReactNode | string
  subHeader: React.ReactNode | string
  textAlign?: 'left' | 'right'
  inverted?: boolean
}

const YakBlock: React.FC<YakBlockProps> = ({
  header,
  subHeader,
  textAlign = 'left',
  inverted = false
}) => (
  <div
    style={{
      backgroundColor: inverted ? pink[50] : ""
    }}
  >
    <HomeContainer maxWidth="xl">
      <Typography
        variant="h4"
        component="h3"
        textAlign={textAlign}
      >
        {header}
      </Typography>
      <hr />
      <Typography
        variant="h5"
        component="p"
        textAlign={textAlign}
      >
        {subHeader}
      </Typography>
    </HomeContainer>
  </div>
)

const Home: React.FC = () => {
  return (
    <>
      <HeroContainer maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
        >
          Nice spotlight you got there<br />
          <small>Shame if someone got in between you twos</small>
        </Typography>
      </HeroContainer >
      <YakBlock
        header="New Noise Works is a (perhaps overly earnest) attempt to patch the hole in tomorrow(!)"
        subHeader={<>Blaming the economy, the system, or Obama is just kind of lazy. Also, it is <em>The Importance Of Being Earnest</em> (sic), otherwise you end up socializing with wannabe royalty when they're kind of lame and you don't want to be there but you put up with it like a play written in the late 1800's. <br /><br />Wilde huh? Or was it some other white guy? Anyway, let's hear it I guess. I'll keep scrolling.</>}
        textAlign="right"
        inverted={true}
      />
      <YakBlock
        header="But I like being lazy! I'm a human!"
        subHeader="Oh. I guess a system could find a way to take advantage of that."
      />
      <YakBlock
        header="Oh like a rad cyber dystopia where you use every bite of digital information against me and I outsmarted you because the human brain in the present moment will always be one step ahead of algorithms made by humans in the previous moments preceeding the immediacy of now?"
        subHeader="What the f*** is wrong with you? Did something happen to you? No, it's a way to use gaming to help the people in need that our epistemologically absent leaders have made excuses to leave behind. New Noise Works only focuses on elements of the world the management element of our society wouldn't know how to - art, and unfortunately for the Jones' of 2022, business."
        textAlign="right"
        inverted={true}
      />
      <YakBlock
        header="Wait, which one of us is in big type?"
        subHeader="Who IS in charge around here anyway?"
      />
    </>
  )
}

export default Home
