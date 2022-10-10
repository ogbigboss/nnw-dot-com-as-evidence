import React from 'react'
import { Collapse, Container, Grid, IconButton, IconButtonProps, Link, Typography } from '@mui/material'
import styled from '@mui/system/styled'
import { pink } from '@mui/material/colors'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transition: (theme.transitions as any).create('transform', {
    duration: (theme.transitions as any).duration.shortest,
  }),
}))

const ExpandMoreContainer = styled(Container)({
  textAlign: 'center',
  paddingTop: 48,
})

const HeroContainer = styled(Container)({
  paddingTop: 128,
  paddingBottom: 196,
})

const HomeContainer = styled(HeroContainer)({
  paddingTop: 128,
  paddingBottom: 128
})

const HomeContainerAlt = styled(HomeContainer)({
  backgroundColor: pink[100]
})

const About: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean[]>([false, false, false, false])

  return <>
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
        Strategy vs. Planning
      </Typography>
    </HeroContainer>
    <HomeContainerAlt maxWidth="xl">
      <Typography
        variant="h4"
      >
        "In short, <strong>strategy</strong> is the act of making an integrated set of choices, which positions the organization to win; while planning is the act of laying out projects with timelines, deliverables, budgets, and responsibilities."
        <br />
        <br />
        <div style={{ textAlign: "right" }}>
          &nbsp;- Roger Martin <Link href="https://rogermartin.medium.com/strategy-vs-planning-complements-not-substitutes-ea08e56809d6" target="_blank" rel="noreferrer">(source)</Link>
        </div>
      </Typography>
    </HomeContainerAlt>
    <HomeContainer maxWidth="xl">
      <Typography
        variant="h4"
      >
        Choice One:
      </Typography>
      <Typography
        variant="h4"
      >
        Sell video games to a pre-existing and thriving "indie gaming" community, saving AAA for another day
      </Typography>
      <ExpandMoreContainer>
        <ExpandMore
          expand={expanded[0]}
          onClick={() => {
            const expandedClone = expanded.slice()
            expandedClone[0] = !expanded[0]
            setExpanded(expandedClone)
          }}
          aria-expanded={expanded[0]}
          aria-label="show more"
        >
        ...
        </ExpandMore>
      </ExpandMoreContainer>
      <Collapse in={!expanded[0]} timeout="auto" unmountOnExit>
        <Grid 
          container
          spacing={4}
        >
          <Grid 
            item
            xs
          >
            <Typography variant="h5">
              Choice One.One:
            </Typography>
            <Typography variant="h6">
              Position for a scalable financial "hit"
            </Typography>
            <Typography paragraph>
              For this grander idea to work, we'll need to have a "hit" game as soon as possible. This is standard fare for most any game studio or publisher, for better or worse. On top of being a "hit", it's business model will need to scale so the product can grow to encourage consistent revenue and growth.
            </Typography>
            <Typography paragraph>
              This is why <em>The Promised Land</em> is the furthest in development -- as a free to play persistent multiplayer game, players will be encouraged to enjoy the farming and story experiences for free, while optionally buying decorative items. This business model is tried and true in the industry, making billions for AAA and indie game outlets alike. It also crucially allows us to keep building the game into new "worlds" to farm into, opening up new experiences as well as revenue opportunities.
            </Typography>
          </Grid>
          <Grid 
            item
            xs
          >
            <Typography variant="h5">
              Choice One.Two:
            </Typography>
            <Typography variant="h6">
              Target existing submarkets w/ unique offerings
            </Typography>
            <Typography paragraph>
              Both <em>The Promised Land</em> and <em>Tower Story</em> are being built in recognition of indie gaming audiences that exists as a viable submarket, while not being served something I can offer uniquely.
            </Typography>
            <Typography paragraph>
              <em>The Promised Land</em> is akin to many popular farming games that have risen since the launch of <em>Stardew Valley</em>, which in turn was heavily inspired by the SNES classic <em>Harvest Moon</em>. However, <em>The Promised Land</em> is a persistent multiplayer farming game -- similar to games that make people say "<em>WOW</em>" -- that isn't currently matched in the market.
            </Typography>
            <Typography paragraph>
              <em>Tower Story</em> is akin to many popular tower building games that have risen since the launch of <em>Sim Tower</em>. I'm still not sure if it's going to be multiplayer, but, you get it. How's it unique? It will be fully 3 dimensional -- even the building you're building.
            </Typography>
          </Grid>
          <Grid 
            item
            xs
          >
            <Typography variant="h5">
              Choice One.Three:
            </Typography>
            <Typography variant="h6">
              Use skills to beat competitors on cost
            </Typography>
            <Typography paragraph>
              So far, I'm just a developer, but I'm very experienced with the web. <em>The Promised Land</em> can be a scalable multiplayer game because of that. That said, I'm no artist, writer, animator -- and I'm simply a decent game developer, if an experienced veteran programmer. 
            </Typography>
            <Typography paragraph>
    NNW's current skill set vs. the indie competition is the offering of persistent multiplayer that can scale in development as well as production due to it's founder's past experiences as a programmer. At least, for TPL.
            </Typography>
          </Grid>
        </Grid>
      </Collapse>
    </HomeContainer>
    <HomeContainerAlt maxWidth="xl">
      <Typography
        variant="h4"
        textAlign="right"
      >
        Choice Two:
      </Typography>
      <Typography
        variant="h4"
        textAlign="right"
      >
        Publicly route a percentage of the revenue to organizations of your choice helping humans
      </Typography>
    </HomeContainerAlt>
    <HomeContainer maxWidth="xl">
      <Typography
        variant="h4"
      >
        Choice One + Two =
      </Typography>
      <Typography
        variant="h4"
      >
        A co-opting of social issues via direct financial support will result in a gaming community that plays games to help the world, instead of playing at politics, and all while "doing a capitalism"
      </Typography>
    </HomeContainer>
    <HomeContainerAlt maxWidth="xl">
      <Typography
        variant="h4"
        textAlign="right"
      >
        Choice Three =
      </Typography>
      <Typography
        variant="h4"
        textAlign="right"
      >
        Something smells in this American Idiocracy. Avoid standard investment, growth, and corporate structures in order to scale a good thing without scaming the customers or the workers.
      </Typography>
    </HomeContainerAlt>
    <HomeContainer maxWidth="xl">
      <Typography
        variant="h4"
      >
        Choice One + Two + Three = Winning:
      </Typography>
      <Typography
        variant="h4"
      >
        Make games while paying animators, developers, designers, QAers, marketers, writers, artists - etc - an above market wage AND all while supporting the world via curtailing traditional investment and corporate mechanics. Call it an upgrade. If competition comes: good, good things are good. And anyway, Upgrayedd gonna <em>get</em> his money.
      </Typography>
    </HomeContainer>
  </>
}

export default About
