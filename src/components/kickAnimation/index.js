import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import MobileKick from './MobileKick'

export default function KickAnimation() {

  return (
    <Box as='section' bg='orange'>
      <Box>
        <Box as='svg' ml='auto' maxW={{base: '118px'}} width="174.696" height="57.341" viewBox="0 0 174.696 57.341">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_2072" data-name="Rectangle 2072" width="174.696" height="57.341" fill="none"/>
            </clipPath>
          </defs>
          <g id="cloud_2" data-name="cloud 2" clip-path="url(#clip-path)">
            <path id="Path_14015" data-name="Path 14015" d="M24.381,49.282c-.005-.139-.021-.276-.021-.416A11.1,11.1,0,0,1,33.272,37.99c.684-18.467,14-33.2,30.327-33.2,11.51,0,21.526,7.322,26.671,18.11a17.518,17.518,0,0,1,26.767,14.871h5.619a11.091,11.091,0,0,1,11.091,11.091c0,.139-.016.276-.021.416Z" transform="translate(40.949 8.059)" fill="#d1d1d1"/>
            <path id="Path_14016" data-name="Path 14016" d="M.271,40.087C.266,39.964.25,39.84.25,39.714c0-4.815,3.783-8.831,8.8-9.737C9.73,13.44,22.88.25,39.009.25A29.846,29.846,0,0,1,65.353,16.47a18.521,18.521,0,0,1,9.14-2.367c9.555,0,17.3,7.022,17.3,15.681h5.55c6.051,0,10.955,4.448,10.955,9.93,0,.126-.013.249-.019.373Z" transform="translate(0.42 0.42)" fill="#fff"/>
            <path id="Path_14017" data-name="Path 14017" d="M108.7,41.175H.051l-.029-.641.67-.029-.678-.1C.005,40.319,0,40.226,0,40.132,0,35.252,3.681,31,8.829,29.842,9.78,13.067,23.124,0,39.429,0A30.483,30.483,0,0,1,66.044,15.981a19.251,19.251,0,0,1,8.866-2.129c9.665,0,17.569,6.973,17.957,15.678h4.9c6.41,0,11.625,4.756,11.625,10.6,0,.094-.005.188-.011.279l-.043.627ZM1.346,39.834h106.7c-.177-4.971-4.719-8.963-10.279-8.963h-6.22V30.2c0-8.276-7.461-15.008-16.633-15.008a17.9,17.9,0,0,0-8.81,2.279l-.6.34-.322-.611A29.172,29.172,0,0,0,39.429,1.34c-15.754,0-28.62,12.772-29.287,29.081l-.024.536-.528.1C4.92,31.9,1.5,35.563,1.346,39.834"/>
          </g>
        </Box>

        <Box as='svg' maxW={{base: '106px'}} width="156.145" height="63.505" viewBox="0 0 156.145 63.505">
          <path id="cloud_1" data-name="cloud 1" d="M.028,63.5C.019,63.3,0,63.114,0,62.914A15.836,15.836,0,0,1,12.721,47.388C13.694,21.029,32.7,0,56.007,0,72.44,0,86.733,10.452,94.082,25.852a25,25,0,0,1,38.206,21.229h8.024a15.833,15.833,0,0,1,15.833,15.833c0,.2-.023.391-.033.591Z" fill="#d1d1d1"/>
        </Box>
      </Box>

      <Text as='h2' textAlign='center'>
        <Text as='span' display={'block'} {...texts.pretitle}>Sweat, tears and</Text>
        <Text as='span' display={'block'} {...texts.title}>a whole lot</Text>
        <Text as='span' display={'block'} {...texts.title}>of blood</Text>
      </Text>

      <Text as='small' mt='30px' textAlign='center' display='block'>Click on the hotspots to learn more.</Text>

      <MobileKick />
    </Box>
  )
}

// font styles
const texts = {
  pretitle: {
    fontFamily: 'heading',
    color: '#A4152D',
    fontSize: {base: '39px'},
    lineHeight: {base: '71px'},
  },
  title: {
    fontFamily: 'heading',
    color: 'white',
    fontSize: {base: '70px'},
    lineHeight: {base: '77px'},
  }
}

