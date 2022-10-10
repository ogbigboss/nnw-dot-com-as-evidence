import { Box, Container, Typography } from '@mui/material'
import styled from '@mui/system/styled'

const Item  = styled('div')({

})

const HeaderType = styled(Typography)({
  fontWeight: 800
})

const ContentType = styled(Typography)({
  backgroundColor: "lightYellow",
  padding: 16
})

const WhatHowWhyNotHuhWhat: React.FC = () => {
  return <>
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}
      >
        <Item>
          <HeaderType>
            <em>What</em>
          </HeaderType>
        </Item>
        <Item>
          <HeaderType>
            <em>How</em>
          </HeaderType>
        </Item>
        <Item>
          <HeaderType>
            <em>Why Not</em>
          </HeaderType>
        </Item>
        <Item>
          <HeaderType>
            <em>Yeah, OK</em>
          </HeaderType>
        </Item>

        <Item>
          <ContentType>
            A good thing in this world
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            An obvious approach that does no harm
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            A fecitious argument typically inferring something is incorrect without being specific, framed as a polite question or point of clarification
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            A passive aggressive but dominantly dimisive retort to the non serious aspects of the argument offered against the obvious good thing that does no harm
          </ContentType>
        </Item>

        <Item>
          <ContentType>
            Make low cost & mostly free to play games
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            Currently I'm "Doing this my damn self" -- see the Support page
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            You're a perpetually broke, emotionally broken pothead
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            You're a towel
          </ContentType>
        </Item>

        <Item>
          <ContentType>
            Redirect a variable % of each purchase to others
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            Internet driven Credit Card processors (like Stripe.com) make this just a matter of a few dozen lines of (already written) code. Organizations just need to exist, be of solid repute, and have a Bank Account. It almost makes you wonder, if it was this easy, why hasn't it been done already?
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            It hasn't been done because business is business and charity is charity
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            Not to the IRS or the FBI, necessarily. It's a bit more grey due to a lack of transparency New Noise Works would provide in contrast to most charities, businesses, and their existing overlap - similar to the publicized itemization Milton Friedman wanted out of the tax code, ironically enough. Don't you think? 
            <br /><br />
            New Noise Works would provide to-the-penny transparency on how your individual purchases were routed, as well as public transparency on all gross revenue figures and distributions. Finally, individuals should be able to list their donations (to charities) as tax deductions.
            <br /><br />
            If there's no free lunch, well, aparently there <em>are</em> free games, but, alas. Anywho, let's see who runs this here saloon after the shooting's done, partner.
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            Run a gaming company in a modern day cyber dystopia that transparently repairs profit margin manipulation to the favor of the human population
          </ContentType>
        </Item>
        <Item></Item>
        <Item>
          <ContentType>
            But what about the haters?
          </ContentType>
        </Item>
        <Item>
          <ContentType>
            Oh I got a minority report kind of thing for them. Don't worry about it.
          </ContentType>
        </Item>
      </Box>
    </Container>
  </>
}

export default WhatHowWhyNotHuhWhat
