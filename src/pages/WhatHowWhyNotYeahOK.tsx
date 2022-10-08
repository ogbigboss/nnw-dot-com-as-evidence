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
      <Item>A passive aggressive but dominant retort to the non serious aspects of the argument offered against the obvious good thing that does no harm</Item>
    </Box>
  </>
}

export default WhatHowWhyNotHuhWhat
