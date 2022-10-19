import React from 'react'
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Container, Grid, IconButton, IconButtonProps, Link, Typography } from '@mui/material'
import { Favorite as FavoriteIcon, Share as ShareIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import styled from '@mui/system/styled'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: (theme.transitions as any).create('transform', {
    duration: (theme.transitions as any).duration.shortest,
  }),
}))

const GameCardContent = styled(CardContent)({
	flexGrow: 1
})

const FundType = styled(Typography)({
  fontSize: 14,
  color: "green",
  marginLeft: 16
})

const gamesData = [
  {
    avatarText: "TPL",
    title: "The Promised Land",
    subheader: <><Link href="http://playthepromisedland.com/" target="_blank" rel="noreferrer">Playable</Link> Dev Build</>,
    desc: <>A persistent multiplayer pixel art farming game set in a future that's not so bad. Constructing the first realm <Link href="http://playthepromisedland.com/" target="_blank" rel="noreferrer">now</Link>.</>,
    funding: "$150k-750k+",
    details: <>
      <Typography>Method:</Typography>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
    </>
  },{
    avatarText: "TS",
    title: "Tower Story: First Story",
    subheader: "In Development",
    funding: "$100k-500k+",
    desc: "A 3D Tower builder akin to S*mT*w*r with S*ms like elements. Make your dream tower full of all kinds of stories!",
    details: <>
      <Typography>Method:</Typography>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
    </>
  },{
    avatarText: "TPM",
    title: "FTSP: The Piano Man",
    subheader: "Concepting",
    funding: "$25k-50k+",
    desc: "A robo detective story told through the second person's POV. Figure out the algorithms before they get in your head!",
    details: <>
      <Typography>Method:</Typography>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
    </>
  },{
    avatarText: "VTN",
    title: "Voodoo Trolluhnomics",
    subheader: "Concepting",
    funding: "$25k-50k+",
    desc: "What happens when everyone's a data zombie in a cyber dystopia and you're a witch with an analog vibe? You deicide!",
    details: <>
      <Typography>Method:</Typography>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
    </>
  },{
    avatarText: "TUB",
    title: "Harriet Tubman: The Game",
    subheader: "Fundraising",
    funding: "Bank robberies",
    desc: "Based on real life, with a twist on who murders-to-save-the-day (the twist is in the game, not in real life). Inspired by the Hitm*n series.",
    details: <>
      <Typography>Method:</Typography>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
    </>
  },{
    avatarText: "NNW",
    title: "This \"game studio\" as a business",
    subheader: "Ideating, Delusioning",
    funding: "Federal Entraptertainment",
    desc: "This is probably a bad idea, in that it will fail. In America, that means it needs funding! How else can we find out? Jack off gesticulation!",
    details: <>
      <Typography>Method:</Typography>
      <Typography>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
    </>
  },
]

const Games: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean[]>([false, false, false, false])

  return (
		<Container maxWidth="xl" sx={{ pt: 4 }}>
      <Typography paragraph>
        ** All funding estimates are, estimates, and exclude the idea of fundraising for others, meaning, we'd need these funds to make the game to have something to sell in order to fundraise for others. I'm also probably underthinking marketing funds, hence, the "+"
      </Typography>
      <Grid
        container
        spacing={{ xs: 4, sm: 4 }}
        columns={{ xs: 1, sm: 8, lg: 12 }}
      >
				{gamesData.map(({
          avatarText,
          desc,
          details,
          funding,
          subheader,
          title
        }, i) => (
          <Grid
            item
            key={title}
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "unset",
              flexDirection: "column",
            }}
          >
            <Card>
              <CardHeader
                avatar={
                  <Avatar>{avatarText}</Avatar>
                }
                title={title}
                subheader={subheader}
              />
              <CardMedia
                component="img"
                height={194}
                image=""
                alt=""
              />
              <GameCardContent>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </GameCardContent>
              <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                <CardContent>
                  {details}
                </CardContent>
              </Collapse>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <FundType>
                  Funds needed: {funding}
                </FundType>
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
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </Grid>
				))}
			</Grid>
      <Typography paragraph sx={{ mt: 4 }}>
        ** Left out of funding estimates are potential administration costs with regards to coordinating with outside organizations as fundraising partners, as well as customer service and administration costs associated with <em>The Promised Land</em>, which is a proposed live service game. It's hopeful but if revenue can come in, that can be managed. At lower funding levels this is just another burden of the founder.
      </Typography>
		</Container>
	)
}

export default Games
