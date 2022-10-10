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
  backgroundColor: pink[100],
  textAlign: "right"
})

const choices = [
  {
    title: <>Choice One:</>,
    subHeader: <>Sell video games to a pre-existing and thriving "indie gaming" community, saving AAA for another day.</>,
    victory: <>Victory is viability</>,
    subChoices: [
      {
        title: <>Choice One.One:</>,
        subHeader: <>Position for a scalable financial "hit"</>,
        body: <>
            <Typography paragraph>
              For this grander idea to work, we'll need to have a "hit" game as soon as possible. This is standard fare for most any game studio or publisher, for better or worse. On top of being a "hit", it's business model will need to scale so the product can grow to encourage consistent revenue and growth.
            </Typography>
            <Typography paragraph>
              This is why <em>The Promised Land</em> is the furthest in development -- as a free to play persistent multiplayer game, players will be encouraged to enjoy the farming and story experiences for free, while optionally buying decorative items. This business model is tried and true in the industry, making billions for AAA and indie game outlets alike. It also crucially allows us to keep building the game into new "worlds" to farm into, opening up new experiences as well as revenue opportunities.
            </Typography>
        </>
      },
      {
        title: <>Choice One.Two:</>,
        subHeader: <>Target existing submarkets w/ unique offerings</>,
        body: <>
            <Typography paragraph>
              Both <em>The Promised Land</em> and <em>Tower Story</em> are being built in recognition of indie gaming audiences that exist as a viable submarket, while not being served something I can offer uniquely.
            </Typography>
            <Typography paragraph>
              <em>The Promised Land</em> is akin to many popular farming games that have risen since the launch of <em>Stardew Valley</em>, which in turn was heavily inspired by the SNES classic <em>Harvest Moon</em>. However, <em>The Promised Land</em> is a persistent multiplayer farming game -- similar to games that make people say "<em>WOW</em>" -- that isn't currently matched in the market.
            </Typography>
            <Typography paragraph>
              <em>Tower Story</em> is akin to many popular tower building games that have risen since the launch of <em>Sim Tower</em>. I'm still not sure if it's going to be multiplayer, but, you get it. How's it unique? It will be fully 3 dimensional -- even the building you're building.
            </Typography>
        </>
      },
      {
        title: <>Choice One.Three:</>,
        subHeader: <>Use skills to beat competitors on cost</>,
        body: <>
            <Typography paragraph>
              So far, I'm just a developer, but I'm very experienced with the web. <em>The Promised Land</em> can be a scalable multiplayer game because of that. That said, I'm no artist, writer, animator -- and I'm simply a decent game developer, if an experienced veteran programmer.
            </Typography>
            <Typography paragraph>
    NNW's current skill set vs. the indie competition is the offering of persistent multiplayer that can scale in development as well as production due to it's founder's past experiences as a programmer. At least, for TPL.
            </Typography>
            <Typography paragraph>
              And not for nothing, but generally developers, server side especially, tend to be the highest point of cost for a game like this, aside from admin and customer service costs should it scale, so my past helps this be possible financially.
            </Typography>
        </>
      }
    ]
  },
  {
    title: <>Choice Two:</>,
    subHeader: <>Publicly route a percentage of the revenue to organizations of your choice helping humans.</>,
    victory: <>Victory is tax verifiable support.</>,
    subChoices: []
  },
  {
    title: <>Choice One + Two =</>,
    subHeader: <>A co-opting of social issues via direct financial support will result in a gaming community that plays games to help the world, instead of playing at politics, and all while "doing a capitalism."</>,
    victory: <>Victory is gamers feeling good about being good. I'll keep the brats behind the gate, don't worry.</>,
    subChoices: []
  },
  {
    title: <>Choice Three:</>,
    subHeader: <>Something smells in this American Idiocracy. Avoid standard investment, growth, and corporate structures in order to scale a good thing without scaming the customers or the workers.</>,
    victory: <>Victory is honestly just trying something new in this boring @$$, corny AF, D+ country.</>,
    subChoices: []
  },
  {
    title: <>Choice One + Two + Three = Winning:</>,
    subHeader: <>Make games while paying animators, developers, designers, QAers, marketers, writers, artists - etc - an above market wage AND all while supporting the world via curtailing traditional investment and corporate mechanics. Call it an upgrade. If competition comes: good, good things are good. And anyway, Upgrayedd gonna get his money.</>,
    victory: <>Victory is unhindered growth of an idea - not a limited set of social opportunities. How drab.</>,
    subChoices: []
  },
]

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
    <HomeContainerAlt maxWidth="xl" sx={{ textAlign: "left" }}>
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

    {choices.map(({
      subHeader,
      subChoices,
      title,
      victory
    }, i) => {
      const Component = i % 2 == 0 ? HomeContainer : HomeContainerAlt

      return <Component maxWidth="xl">
        <Typography
          variant="h4"
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
        >
          {subHeader}
        </Typography>
        <Typography
          sx={{ mt: 4 }}
          variant="h4"
        >
          {victory}
        </Typography>
        {subChoices.length > 0 && (
          <ExpandMoreContainer>
            <ExpandMore
              expand={expanded[i]}
              onClick={() => {
                const expandedClone = expanded.slice()
                expandedClone[i] = !expanded[i]
                setExpanded(expandedClone)
              }}
              aria-expanded={expanded[i]}
              aria-label="show more"
            >
            ...
            </ExpandMore>
          </ExpandMoreContainer>
        )}
        <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
          <Grid 
            container
            spacing={4}
          >
            {subChoices.map(({ body, subHeader, title }) => (
              <Grid
                item
                xs={12}
                lg
              >
                <Typography variant="h5">
                  {title}
                </Typography>
                <Typography variant="h6">
                  {subHeader}
                </Typography>
                {body}
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Component>
    })}
  </>
}

export default About
