import React from 'react'
import { Card, CardHeader, CardContent, Collapse, Container, Grid, IconButton, IconButtonProps, Link, Typography } from '@mui/material'
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
  backgroundColor: pink[200],
  minWidth: 45
}))

const ExpandMoreContainer = styled(Container)({
  textAlign: 'center',
  paddingTop: 48,
  paddingBottom: 48,
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
            We need a "hit" as soon as possible with a business model that will scale the product's growth to encourage interaction and revenue.
          </Typography>
          <Typography paragraph>
            This is why <em>The Promised Land</em>, a free to play persistent multiplayer game focused on cooperative farming, is the furthest in development.
          </Typography>
          <Typography paragraph>
            This business model makes billions annually across many gaming markets. It also allows us a unqiue point of scale by adding new "worlds" to farm and experience.
          </Typography>
        </>
      },
      {
        title: <>Choice One.Two:</>,
        subHeader: <>Target submarkets w/ unique offerings</>,
        body: <>
          <Typography paragraph>
            Our strategy initially will be to create games for existing submarkets that lack content we can offer uniquely.
          </Typography>
          <Typography paragraph>
            <em>The Promised Land</em> is akin to many popular farming games inspired by <em>Stardew Valley</em>, which in turn was inspired by <em>Harvest Moon</em>. However, <em>The Promised Land</em> is a persistent multiplayer game with a story that isn't currently matched in the market.
          </Typography>
          <Typography paragraph>
            Our other ideas have similar sub markets in mind. Check them out in our <Link href="/games">games section!</Link>
          </Typography>
        </>
      },
      {
        title: <>Choice One.Three:</>,
        subHeader: <>Use skills to beat competitors on cost</>,
        body: <>
          <Typography paragraph>
            NNW's unique offering at the indie level is persistent multiplayer that can scale in development as well as production due to it's founder's past experiences as a programmer. 
          </Typography>
          <Typography paragraph>
            Said career in programming offers the founder a personal budget to dispose of in lue of his retiring amongst a planet full of idiots before his 401k can compete.
          </Typography>
          <Typography paragraph>
            As a matter of business practicality, he's looking more into risk analysis but for now he seems to keep looking behind him.
          </Typography>
        </>
      }
    ]
  },
  {
    title: <>Choice Two:</>,
    subHeader: <>Publicly route a percentage of the revenue to organizations of your choice helping make the world you'd like to see, all while the IRS is watching.</>,
    victory: <><em><strong>Victory is</strong></em> tax verifiable support.</>,
    subChoices: [
      {
        title: <>Choice Two.One:</>,
        subHeader: <>Credit card processors route funds</>,
        body: <>
          <Typography paragraph>
            We all use credit cards freely on the internet in 2022, so this isn't very complicated to setup. We'd use Stripe.com as many others do for the software side of credit card processing.
          </Typography>
          <Typography paragraph>
            That said, Stripe offers us a way to easily and immediately move your money directly to the organizations you're supporting without being a "middle man" of any kind.
          </Typography>
        </>
      },
      {
        title: <>Choice Two.Two:</>,
        subHeader: <>Financial transparency as a default</>,
        body: <>
          <Typography paragraph>
            All revenue distributions will be recorded and reported, meaning you'll have an easy to read, honest receipt telling you where your money went.
          </Typography>
          <Typography paragraph>
            Furthermore, you'll be able to choose how much (if any) of your purchase will be routed to what organizations. Support who you want, not who I want. And if we agree, well, it works both ways!
          </Typography>
        </>
      },
      {
        title: <>Choice Two.Three:</>,
        subHeader: <>Donations qualify as tax deducations</>,
        body: <>
          <Typography paragraph>
            Since your money is being directly routed to organizations, and we provide a receipt of this activity, as long as the organization qualifies as a charity, you should be able to report that amount as a tax deduction, at least if you're an "American" taxpayer.
          </Typography>
          <Typography paragraph>
            We'll provide details on your receipts. Even if this is what Milton Friedman would want. NNW doesn't hold grudges, not liberally.
          </Typography>
        </>
      },
    ]
  },
  {
    title: <>Choice One + Two =</>,
    subHeader: <>A co-opting of social issues via direct financial support will result in a gaming community that plays games to help the world, instead of playing at politics, and all while "doing a capitalism."</>,
    victory: <>
      <em><strong>Victory is</strong></em> gamers feeling good about being good. I'll keep the brats behind the gate, don't worry.
    </>,
    subChoices: [
      {
        title: <>(One + Two).One:</>,
        subHeader: <>Free to play becomes free to support</>,
        body: <>
          <Typography paragraph>
            Blame it on inequality, inefficiency, or the alcohol - not everyone has free money, even if they have the time. The "Free To Play" business model allows communities to play a game to help raise money.
          </Typography>
          <Typography paragraph>
            Like those people that show up to bake sales and wait til after the business parts to eat / "steal" / reappropriate food that didn't sell.
          </Typography>
          <Typography paragraph>
            Or, like non drinkers at bars. Saloons? Anyway idiots, it takes a village!
          </Typography>
        </>
      },
      {
        title: <>(One + Two).Two:</>,
        subHeader: <>Gamers ♥♥♥ good, but prefer games</>,
        body: <>
          <Typography paragraph>
            Ever notice all those fundraising bars all over Twitch? Those gamers actually like that sh*t.
          </Typography>
          <Typography paragraph>
            That said, many gamers tire of issues being forced onto them in games. Even me. Material support means content creators have a wider avenue - tie politics to the game, or not, who cares.
          </Typography>
          <Typography paragraph>
            Either way, things you support are supported financially, not through the hocus pocus of polticized rhetorical "change."
          </Typography>
        </>
      },
      {
        title: <>(One + Two).Three:</>,
        subHeader: <>Social causes provide marketing ops</>,
        body: <>
          <Typography paragraph>
            Look -- marketing is expensive. All groups focused on social issues know this. The f*ck you think I said co-opt for? See the financials above, it's all above the table.
          </Typography>
          <Typography paragraph>
            So, while the co-opting of social issues via financial support could be written off as a "scam" -- which we at NNW find very bigoted, not necessarily against sicillians, given my race, but you understand, right Senators?
          </Typography>
          <Typography paragraph>
            At NNW we call it "cost effective marketing."
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
            The truth of all businesses is they form their own organizational structure. Governments exist largely in the relationship of taxes and criminal behaviors, which, we'd avoid.
          </Typography>
          <Typography paragraph>
            Outside of outright facism, there is rarely so much regulation such to stifle innovation completely. Certainly not in my America!
          </Typography>
          <Typography paragraph>
            New things are scary, and they don't always work. But that's not the hard part. The hard part is letting go of things that work for you, but don't for others, and in a way that proves nothing more than a need to move on from your past, or those people. That's not so bad.
          </Typography>
        </>
      },
      {
        title: <>Choice Three.Two</>,
        subHeader: <>Internal decisions must be internally decided</>,
        body: <>
          <Typography paragraph>
            Organizational structure for NNW is a big decision to make. For inspiration we'd seek successful models, and co-ops have proven to be tenable, scalable, lucrative for investors, as well as hospitable to it's employees. Mondragon is a great example, posting revenue figures in the billions.
          </Typography>
          <Typography paragraph>
            Tax and investment identities as tactics aside, speaking strategically the goal would be to insure all internal decisions would be made with mutual correspondence. If employees have the best internal information to be competitive, the company will mirror this externally with less friction / meetings.
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
    subHeader: <>Make games while paying creators an above market wage all while supporting the world. Call it an upgrade. If competition comes: good, good things are good. And anyway, Upgrayedd gonna <em>get</em> his money.</>,
    victory: <><em><strong>Victory is</strong></em> the unhindered growth of an idea - not a limited set of social opportunities. How drab. And what a <em>terrible</em> lie!</>,
    subChoices: []
  },
  {
    title: <>Who would be supported then?</>,
    subHeader: <>You'll be able to choose whom to support and how to balance the donation between several groups, falling under the following four suits:</>,
    subChoices: [
      {
        title: <>Vets etc.</>,
        subHeader: <><em>Guns, cuffs, hoses, garbage, desks... etc!</em></>,
        body: <>
          <Typography paragraph>
            Government workers and those formerly detained by the government that the government can't support (any longer, in the moment, "etc."). You ever walk past the thin blue line? It's a pretty big grey area. You might need a JD, guns, and/or money!
          </Typography>
        </>,
      },
      {
        title: <>The Broken Hearted</>,
        subHeader: <><em>Sex, drugs, rock, AND roll? Too much?</em></>,
        body: <>
          <Typography paragraph>
            Mental health, substance abuse, victims of sexual violence -- the symptoms of societies led by broken families shouldn't be a matter of charity -- but it isn't something with sufficient support either. Help those putting themselves together.
          </Typography>
        </>,
      },
      {
        title: <>The Hearted Broke</>,
        subHeader: <><em>If it was just jokes they wouldn't be broke</em></>,
        body: <>
          <Typography paragraph>
            Many are demographically disenfranchised - LGBTQ (#notallstr8s), many disabled, indigineous, non whites (#notallwhites) non males, animals - if your heart beats you shouldn't be without <small>(unless you f*** my s*** up, read the fine print, and that goes for <em>anything</em>)</small>.
          </Typography>
        </>,
      },
      {
        title: <>The Empirically Correct</>,
        subHeader: <><em>Testing... testing... testing...</em></>,
        body: <>
          <Typography paragraph>
            We should probably do... more... to prepare for climate change. Even if we're wrong. Just in case. Couldn't hurt. Survivalists like, have lifetime supplies of beans and s*** (or something, idk, I'm often incorrect). This would be like that! Sort of.
          </Typography>
        </>,
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
      const isAlt = i % 2 === 0
      const Component = isAlt ? HomeContainerAlt : HomeContainer

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
            {subChoices && subChoices.length > 0 && subChoices.length < 4 && (
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
            )}
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
                <Card
                  variant={isAlt ? undefined : "outlined"}
                >
                  <CardHeader
                    title={title}
                    subheader={subHeader}
                    sx={{
                      pb: 0
                    }}
                  />
                  <CardContent>
                    {body && body}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Component>
    })}
  </>
}

export default About
