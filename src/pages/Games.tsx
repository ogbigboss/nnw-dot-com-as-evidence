import React from 'react'
import { Avatar, Box, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Container, Grid, IconButton, IconButtonProps, Typography } from '@mui/material'
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
  fontSize: 14
})

const gamesData = [{
	avatarText: "TPL",
	title: "The Promised Land",
	subheader: "Playable Dev Build",
	desc: "A persistent multiplayer pixel art farming game set in a future that's not so bad. Constructing the first realm now.",
  funding: "$150k-500k+",
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
  funding: "$100k-250k+",
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
  funding: "$15k-50k+",
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
  funding: "$15k-50k+",
	desc: "What happens when everyone's a data zombie in a cyber dystopia and you're a witch with an analog vibe? You deicide!",
	details: <>
		<Typography>Method:</Typography>
		<Typography>
			Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
			aside for 10 minutes.
		</Typography>
	</>
},]

const Games: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean[]>([false, false, false, false])

  return (
		<Container maxWidth="xl" sx={{ pt: 4 }}>
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 1, md: 8, xl: 16 }}
      >
				{gamesData.map(({ avatarText, title, subheader, desc, details, funding }, i) => (
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
		</Container>
	)
}

export default Games
