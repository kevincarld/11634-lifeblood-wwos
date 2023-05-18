import React from 'react'
import { Box, Flex, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Donate() {

  return (
    <Box as='section'>
      <Text as='h2' px={{base: '20px'}} mb={{base:"40px"}} {...texts.title}>Why we donate</Text>

      <Box px={{base: '20px'}}>
        <Text textStyle='subheading'>To Cooper Smeaton’s family, AFL players had always been heroes on the field. But when Cooper became sick, Swans player Brett Kirk became a hero off-the-field as well.</Text>

        <PreLine textStyle='body'>
          {`At three-years-old, Cooper was diagnosed with Acute Lymphoblastic Leukemia and had to undergo multiple courses of chemotherapy. While the treatment successfully removed the cancerous cells, it also damaged his ability to produce vital immune and red blood cells. For over a year, Cooper needed regular blood, platelet, and plasma transfusions to live. He faced years of hospital stays.

          During that time, Brett Kirk was volunteering at the Children’s Hospital every Tuesday. There, he met Cooper and his family, and would visit them each week.`}
        </PreLine>
      </Box>

      <Img my={{base: '64px'}} dimension='899x697' mock='donate-1' />

      <PreLine px={{base: '20px'}}>
        {`“It was bloody hard on the family,” Brett remembers. “My commitment was when I was in the hospital, I would always find time to hang with Coop. That’s all I did. Just be there. To talk, share stories or have a laugh. I think I was a welcome distraction from hospital life. It also gave his mum Jan or dad Daryl a break and another person to talk to. We formed a great friendship that continues today.”

        Brett’s support made a world of difference to Cooper.

        “I don’t know if Kirky heard it through word of mouth, but one day he turned up in the ICU with a handful of groceries and just sat with my mum and dad for as long as they needed – while he was still, you know, captain of the Sydney Swans,” Cooper says. `}
      </PreLine>

      <Img mt={{base: '60px'}} mb={{base: '30px'}} dimension='899x697' mock='donate-2' />

      <Box color='#A4152D'>
        <Flex mb={{base: '35px'}} gap={{base: '10px'}}>
          <Text textStyle={'quote'}>“</Text>
          <PreLine textStyle='quote'>
            {`You never know
            whose life you
            might be saving”`}
          </PreLine>
        </Flex>

        <Box px={{base: '20px'}}>
          <Text {...texts.name}>Brent Kirk</Text>
          <Text {...texts.position}>Former Sydney Swans Captain</Text>
        </Box>
      </Box>

      <PreLine px={{base: '20px'}} textStyle='body'>
        {`Now, the Swans are more than just his favourite team: “‘The Swans are 100% my family,” Cooper says.

        Brett even promised Cooper that they could run out on the field together when he beat the cancer. Sure enough, when Cooper entered remission, he ran out onto the field and through the banner with Brett.

        “That made me happy,” Brett says. “To know what Coop and his family endured over a long period of time then to come out the other side — they deserved it.”

        Today, Kirk urges anyone who can to donate blood, platelets, and plasma. “You never know whose life you might be saving,” he says.`}
      </PreLine>

      <Img mt={{base: '60px'}} mb={{base: '30px'}} dimension='899x697' mock='donate-3' />

      <Box color='#A4152D'>
        <Flex mb={{base: '35px'}} gap={{base: '10px'}}>
          <Text textStyle={'quote'}>“</Text>
          <PreLine textStyle='quote'>
            {`My commitment
            was when I was
            in the hospital, I
            would always
            find time to
             hang with Coop.”`}
          </PreLine>
        </Flex>

        <Box px={{base: '20px'}}>
          <Text {...texts.name}>Brent Kirk</Text>
          <Text {...texts.position}>Former Sydney Swans Captain</Text>
        </Box>
      </Box>
    </Box>
  )
}

// font styles
const texts = {
  title: {
    color: '#E42313',
    fontFamily: 'heading',
    fontSize: {base: '70px'},
    lineHeight: {base: '77px'},
  },
  name: {
    color: '#5E0024',
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: {base: '16px'},
    lineHeight: {base: '28px'},
    mb: '0!important',
  },
  position: {
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: {base: '16px'},
    lineHeight: {base: '28px'},
    mb: '53px',
  }
}

