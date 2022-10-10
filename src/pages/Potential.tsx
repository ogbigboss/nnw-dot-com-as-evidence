import { Container, Link, Typography } from '@mui/material'
import styled from '@mui/system/styled'
import theme from '../theme'

const HeroContainer = styled(Container)({
  paddingTop: 128,
  paddingBottom: 196,
})

const HomeContainer = styled(HeroContainer)({
  paddingTop: 96,
  paddingBottom: 96
})

const HomeContainerAlt = styled(HeroContainer)({
  backgroundColor: theme.palette.secondary.light
})

const About: React.FC = () => (
  <>
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
        <br />Make video games, for money
      </Typography>
    </HomeContainer>
    <HomeContainerAlt maxWidth="xl">
      <Typography
        variant="h4"
        textAlign="right"
      >
        Choice Two:
        <br />Publicly route a percentage of the revenue to organizations of your choice helping humans
      </Typography>
    </HomeContainerAlt>
    <HomeContainer maxWidth="xl">
      <Typography
        variant="h4"
      >
        Choice One + Choice Two =
        <br />A co-opting of social issues via direct financial support will result in a gaming community that plays games to help the world, instead of playing at politics, and all while "doing a capitalism"
      </Typography>
    </HomeContainer>
  </>
)

export default About
