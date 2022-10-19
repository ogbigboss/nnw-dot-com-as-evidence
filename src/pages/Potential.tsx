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
})

const choices = [
  {
    title: <>Choice One:</>,
    subHeader: <>Sell video games to a pre-existing and thriving "indie gaming" community, saving AAA for another day.</>,
    victory: <><em><strong>Victory is</strong></em> viability.</>,
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
    victory: <><em><strong>Victory is</strong></em> tax verifiable support.</>,
    subChoices: [
      {
        title: <>Choice Two.One:</>,
        subHeader: <>Credit card processors route funds</>,
        body: <>
          <Typography paragraph>
          </Typography>
        </>
      },
      {
        title: <>Choice Two.Two:</>,
        subHeader: <>Financial transparency as a default</>,
        body: <>
          <Typography paragraph>
            All revenue distributions will be recorded and reported
          </Typography>
        </>
      },
      {
        title: <>Choice Two.Three:</>,
        subHeader: <>Donations qualify as tax deducations</>,
        body: <>
          <Typography paragraph>
          </Typography>
        </>
      },
    ]
  },
  {
    title: <>Choice One + Two =</>,
    subHeader: <>A co-opting of social issues via direct financial support will result in a gaming community that plays games to help the world, instead of playing at politics, and all while "doing a capitalism."<br /><br />Furthermore, free to play games allow those without to support causes simply by playing, all proven by aforementioned "capitalism".</>,
    victory: <>
      <em><strong>Victory is</strong></em> gamers feeling good about being good. I'll keep the brats behind the gate, don't worry.
    </>,
    subChoices: [
      {
        title: <>(One + Two).One:</>,
        subHeader: <>Free to play becomes free to support</>,
        body: <>
          <Typography paragraph>
          </Typography>
        </>
      },
      {
        title: <>(One + Two).Two:</>,
        subHeader: <>Gamers love supporting good causes</>,
        body: <>
          <Typography paragraph>
            Ever notice all those fundraising bars all over Twitch? They (those kids) actually like that shit. Like, they like raising money for other people. In a proven way.
          </Typography>
        </>
      },
      {
        title: <>(One + Two).Three:</>,
        subHeader: <>Social causes provide marketing ops</>,
        body: <>
          <Typography paragraph>
            Look -- marketing is expensive. All groups focused on social issues know this. The f*ck you think I said co opt for? See the financials above, it's all above the table (your honor, I swear!).
          </Typography>
        </>
      },
    ]
  },
  {
    title: <>Choice Three:</>,
    subHeader: <>Something smells in this American Idiocracy. Avoid standard investment, growth, and corporate structures in order to scale a good thing without scaming the customers or the workers.</>,
    victory: <><em><strong>Victory is</strong></em> honestly just trying something new in this boring @$$, corny AF, D+ country.</>,
    subChoices: [
      {
        title: <>Choice Three.One</>,
        subHeader: <>Or, there is no business "as usual"</>,
        body: <>
          <Typography paragraph>
            The truth of all businesses, for their history, is they form their own organizational structure. Governments exist largely in the relationship of taxes and possible criminal behaviors, which, we'd avoid.
          </Typography>
          <Typography paragraph>
            Outside of outright facist governments, there is rarely so much regulation such to stifle innovation completely. Hopefully not in America, right?
          </Typography>
        </>
      },
      {
        title: <>Choice Three.Two</>,
        subHeader: <>Co Ops have scaled globally</>,
        body: <>
          <Typography paragraph>
            Organizational structure for NNW is a big decision to make. For inspiration we'd seek successful models, and co-ops have proven to be tenable, scalable, lucrative for investors, as well as hospitable to it's employees. Mondragon is a great example, posting revenue figures in the billions.
          </Typography>
          <Typography paragraph>
            That said, there are a lot of ways to skin this... well, you get it.
          </Typography>
        </>
      },
      {
        title: <>Choice Three.Three</>,
        subHeader: <>Content creation means paying for it</>,
        body: <>
          <Typography paragraph>
            America's current leadership class has promoted competition to the point that collaboration is impossible. The result is a country at each other's throats over social media driven pathologies that don't exist in a paycheck to paycheck life.
          </Typography>
          <Typography paragraph>
            The current administration forces high taxes with higher inflation on it's citezenry. NNW will look up to institutions like <strong>Bloomberg Inc, where employees are paid above market value as a standard so the company competes as a team, not against each other</strong>, like <em>some</em> American leaders would want you to do.
          </Typography>
        </>
      },
    ]
  },
  {
    title: <>Choice One + Two + Three = Winning:</>,
    subHeader: <>Make games while paying animators, developers, designers, QAers, marketers, writers, artists - etc - an above market wage AND all while supporting the world via curtailing traditional investment and corporate mechanics. Call it an upgrade. If competition comes: good, good things are good. And anyway, Upgrayedd gonna <em>get</em> his money.</>,
    victory: <><em><strong>Victory is</strong></em> the unhindered growth of an idea - not a limited set of social opportunities. How drab.</>,
    subChoices: []
  },
  {
    title: <>Who would be supported then?</>,
    subHeader: <>You'll be able to choose whom to support and how to balance the donation between several groups, falling under the following four suits:</>,
    subChoices: [
      {
        title: <>Vets etc.:</>,
        subHeader: <>
          Government workers and those formerly detained by the government that the government can't support <small>(any longer, in the moment, "etc.")</small>
        </>,
        body: <></>
      },
      {
        title: <>The Broken Hearted:</>,
        subHeader: <>
          Mental health, substance abuse, victims of sexual violence -- the symptoms of societies led by broken families shouldn't be a matter of charity -- but it isn't something with sufficient support either
        </>,
        body: <></>
      },
      {
        title: <>The Hearted Broke:</>,
        subHeader: <>
            Many have been left behind because of how they live - LGBTQ <small>(#notallstr8s)</small>, the disabled, many indigineous, non whites <small>(#notallwhites)</small> and non males - if your heart beats you shouldn't be without <small>(unless you f*** my s*** up, read the fine print, and that goes for <em>anyone</em>)</small>
        </>,
        body: <></>
      },
      {
        title: <>The Empirically Correct:</>,
        subHeader: <>
          We should probably do... more... to prepare for climate change. Even if we're wrong. Just in case. Couldn't hurt. Survivalists like, have lifetime supplies of beans and s*** <small>(or something, idk, I'm often incorrect)</small>. This would be like that! Sort of.
        </>,
        body: <></>
      }
    ]
  },{
    title: <>OK, strategy is nice -- what about planning?</>,
    subHeader: <>See the <Link href="/games/">games we're planning now</Link>!</>,
  }
]

const About: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean[]>([false, false, false, false, false, true])
  const [mojo, setMojo] = React.useState<boolean>(false)

  return <>
    <HeroContainer maxWidth="xl">
      <Typography
        variant="h1"
        sx={{
          mb: 2,
          fontWeight: "bold",
          textTransform: "uppercase"
        }}
      >
        New Noise Works
      </Typography>
      <Typography
        variant="h2"
      >
        Now Producing a Higher Ground
      </Typography>
    </HeroContainer>
    <HomeContainerAlt maxWidth="xl" style={{ textAlign: "left" }}>
      <Typography
        variant="h3"
        sx={{
          mb: 2
        }}
      >
        Strategy vs. Planning
      </Typography>
      <Typography
        variant="h4"
      >
        Making Video Games that Make the World Better, With Money
      </Typography>
      <ExpandMoreContainer>
        <ExpandMore
          expand={mojo}
          onClick={() => setMojo(!mojo)}
          aria-expanded={mojo}
          aria-label="show more"
        >
        ...
        </ExpandMore>
      </ExpandMoreContainer>
      <Collapse in={mojo} timeout="auto" unmountOnExit>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            mb: 2
          }}
        >
          AND / OR: How to make a business develop by partnering globally with creatives, all without assuming the illegal exploitation of the talent or the idiocy of the customer as a "must" in terms of leadership, business or otherwise.
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          We're here to make the "average Joe" comparisons Pall, Son. NNW aims to raise the Bar. Rack em! 
        </Typography>
      </Collapse>
    </HomeContainerAlt>
    <HomeContainer maxWidth="lg">
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
    </HomeContainer>

    {choices.map(({
      subHeader,
      subChoices,
      title,
      victory
    }, i) => {
      const Component = i % 2 !== 0 ? HomeContainer : HomeContainerAlt

      return <Component maxWidth={i !== 5 ? 'lg' : 'xl'} key={`${title}-${subHeader}`}>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
        >
          {subHeader}
        </Typography>
        {victory &&
          <Typography
            sx={{ mt: 4 }}
            variant="h4"
          >
            {victory}
          </Typography>
        }
        {subChoices && subChoices.length > 0 && (
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
            textAlign="left"
          >
            {subChoices && subChoices.map(({ body, subHeader, title }) => (
              <Grid
                item
                key={`${title}-${subHeader}`}
                lg
                xs={12}
              >
                <Typography variant="h5">
                  {title}
                </Typography>
                <Typography variant="h6">
                  {subHeader}
                </Typography>
                {body && body}
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Component>
    })}
  </>
}

export default About
