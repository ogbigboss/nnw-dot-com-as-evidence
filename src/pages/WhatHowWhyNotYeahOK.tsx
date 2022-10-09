import { Box } from '@mui/material'
import styled from '@mui/system/styled'

const Item  = styled('div')({

})

const WhatHowWhyNotHuhWhat: React.FC = () => {
  return <>
    <Box
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(4, 1fr)'
      }}
    >
      <Item><em>What</em></Item>
      <Item><em>How</em></Item>
      <Item><em>Why Not</em></Item>
      <Item><em>Yeah, OK</em></Item>

      <Item>A good thing in this world</Item>
      <Item>An obvious approach that does no harm</Item>
      <Item>A fecitious argument typically inferring something is incorrect without being specific, framed as a polite question or point of clarification</Item>
      <Item>A passive aggressive but dominantly dimisive retort to the non serious aspects of the argument offered against the obvious good thing that does no harm</Item>

      <Item>Make low cost & mostly free to play games</Item>
      <Item>Currently I'm "Doing this my damn self" -- see the Support page</Item>
      <Item>You're a perpetually broke, emotionally broken pothead</Item>
      <Item>You're a towel</Item>

      <Item>Redirect a variable % of each purchase to others</Item>
      <Item>Internet driven Credit Card processors (like Stripe.com) make this just a matter of a few dozen lines of (already written) code. Organizations just need to exist, be of solid repute, and have a Bank Account. It almost makes you wonder, if it was this easy, why hasn't it been done already?</Item>
      <Item>It hasn't been done because business is business and charity is charity</Item>
      <Item>Not to the IRS or the FBI, necessarily. It's a bit more grey due to a lack of transparency New Noise Works would provide in contrast to most charities, businesses, and their existing overlap - similar to the publicized itemization Milton Friedman wanted out of the tax code, ironically enough. Don't you think? New Noise Works would provide to-the-penny transparency on how your individual purchases were routed, as well as public transparency on all gross revenue figures and distributions. Finally, individuals should be able to list their donations (to charities) as tax deductions. If there's no free lunch, well, aparently there <em>are</em> free games, but, alas. Anywho, let's see who runs this here saloon after the shooting's done, partner.</Item>
      <Item>Run a gaming company in a modern day cyber dystopia that transparently repairs profit margin manipulation to the favor of the human population</Item>
      <Item></Item>
      <Item>But what about the haters?</Item>
      <Item>Oh I got a minority report kind of thing for them. Don't worry about it.</Item>
    </Box>
  </>
}

export default WhatHowWhyNotHuhWhat
