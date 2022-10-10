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
      backgroundColor: inverted ? pink[100] : ""
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
          <small>Shame if something happened to get between you twos</small>
        </Typography>
      </HeroContainer>
      <YakBlock
        header="New Noise Works is a (perhaps overly earnest) attempt to patch the hole in tomorrow(!)"
        subHeader={<>Blaming the economy, the system, or "Obama" is just kind of lazy. Also, it is <em>The Importance Of Being Earnest</em> (sic), otherwise you end up socializing with wannabe royalty when they're kind of lame and you don't want to be there but you put up with it like a play written in the late 1800's. <br /><br />Wilde huh? Or was it some other white guy? Anyway, let's hear it I guess. I'll keep scrolling.</>}
        textAlign="right"
        inverted={true}
      />
      <YakBlock
        header="But I like being lazy! I'm a human!"
        subHeader="Oh. I guess a system could find a way to take advantage of that."
      />
      <YakBlock
        header="Oh, like a rad cyber dystopia where you use every bit of digital information against me and I outsmart you because the human brain in the present moment will always be one step ahead of algorithms made in the moments preceeding the immediacy of now?"
        subHeader="What the f*** is wrong with you? Did something happen to you? No, it's a way to use gaming to help the people in need that our epistemologically absent leaders have made excuses to leave behind. New Noise Works only focuses on elements of the world the management element of our society wouldn't know how to - art, and unfortunately for the Jones' of 2022, business."
        textAlign="right"
        inverted={true}
      />
      <YakBlock
        header="Wait, which one of us is in big type?"
        subHeader="Who IS in charge around here anyway?"
      />
      <YakBlock
        header="Who would be supported then?"
        subHeader={<>
          <p>You'll be able to choose whom to support / how to balance the donation between several groups, falling under the following four suits:</p>
          <ul>
            <li>
              <strong>Vets etc.</strong> -
              Government workers and those formerly detained by the government that the government can't support <small>(any longer, in the moment, "etc.")</small>
            </li>
            <li>
              <strong>The broken hearted</strong> -
              Mental health, substance abuse, victims of sexual violence -- the symptoms of broken families and societies shouldn't be a matter of charity -- but it isn't something with sufficient support either
            </li>
            <li>
              <strong>The hearted broke</strong> -
              Many have been left behind because of how they live - LGBTQ <small>(#notallstr8s)</small>, the disabled, many indigineous, non whites <small>(#notallwhites)</small> and non males - if your heart beats you shouldn't be without <small>(unless you f*** my s*** up, read the fine print, and that goes for <em>anyone</em>)</small>
            </li>
            <li>
              <strong>The empirically correct</strong> - 
              We should probably do... more... to prepare for climate change. Even if we're wrong. Just in case. Couldn't hurt. Survivalists like, have lifetime supplies of beans and s*** <small>(or something, idk, I'm often incorrect)</small>. This would be like that! Sort of.
            </li>
          </ul>
        </>}
        inverted={true}
      />
      <YakBlock
        header="Wait, you don't trust governments and big businesses to handle all that?"
        subHeader={<>
          I mean, I'm sure they <em>could</em>, I just think "team me" could do it better is all.<br /><br />A bit of friendly competition couldn't hurt could it?<br /><br />Well, feelings, maybe.
        </>}
        textAlign="right"
      />
    </>
  )
}

export default Home
