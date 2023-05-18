import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Intro() {

  return (
    <Box as='section'>
      <Box maxW={{base: '375px'}} mx={{base:"auto"}}>
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

        <Box as='svg' mt={{base: '-120px'}} mb={{base: '-60px'}} mx='auto' maxW={{base: '127px'}} width="216.746" height="472.843" viewBox="0 0 216.746 472.843">
          <defs>
            <clipPath id="clip-pathdadkid">
              <rect id="Rectangle_2070" data-name="Rectangle 2070" width="216.746" height="472.843" fill="none"/>
            </clipPath>
          </defs>
          <g id="illus_dad_kid" data-name="illus dad kid" clip-path="url(#clip-pathdadkid)">
            <path id="Path_13996" data-name="Path 13996" d="M26.152,16.627c-5.083,1.292-10.65,5.21-15.219,9.7-.031-.038-.065-.073-.1-.111a37.932,37.932,0,0,0,1.047,15.564c1.062,7.261,5.9,13.287,8.07,15.641l.081.092c5.942-.713,12.6-2.016,17.14-4.255a13.7,13.7,0,0,0,5.083-4.079c-8.3-4.221-15.012-17.581-16.1-32.551" transform="translate(29.646 47.114)" fill="#e22726"/>
            <path id="Path_13997" data-name="Path 13997" d="M39.394,34.7c3.293-6.908.387-6.226-.2-6.088s-3.788,6.1-5.758,6.866c-1.219.479-1.012-3.2-.38-8.192.387-3.059,2.883-8.652,2.116-10.623-1.372-3.519-7.587,8.223-9.818,11.807-.675,1.089-1.392,7.912-2,17.121l9.572-1.1c.18-4.547,3.642-3.864,6.467-9.791" transform="translate(66.175 45.38)" fill="#d2a47e"/>
            <path id="Path_13998" data-name="Path 13998" d="M78.669,43.553c-.077-4.884-.291-9.319-.728-13.111.794-10.63-7.955-19.076-18.815-20.471-13.486-1.733-25.371,23.281-42.955,8.1-5.444,21.069,3.236,44.738,14.882,50.361C44.3,63.794,58.876,53.7,68.038,45.454c.422,1.039.7,1.652.7,1.652,3.8,5.727,13.67,14.039,14.679,14.882A17.821,17.821,0,0,0,87.812,58Z" transform="translate(41.103 28.008)" fill="#ffd03f"/>
            <path id="Path_13999" data-name="Path 13999" d="M48.036,11.608A8.783,8.783,0,1,0,34.76,15.975c-8.3,6.54-7.74,18.1-5.194,21.863,3.8,5.624,9.887.732,9.871-.207-.138-6.517,5.9-8.767,6.912-6.644s-.659,5.72-.659,5.72,3.236-4.915,7.222-5.129,9.86,10.209,11.677.314A17.143,17.143,0,0,0,48.036,11.608" transform="translate(79.062 0)" fill="#1d2151"/>
            <path id="Path_14000" data-name="Path 14000" d="M53.485,9.245c-3.987.219-7.222,5.129-7.222,5.129s1.671-3.6.659-5.72-7.05.13-6.916,6.647c.019.939-6.065,5.831-9.868.2a6.4,6.4,0,0,1-.337-.587L27.7,17.2c6.218,2.5,10.991,7.46,12.436,13.651l2.277-2.239s2.94,2.082,10.243-.414c6.03-2.062,10.128-9.189,11.259-15.258C61.409,16.2,56.8,9.064,53.485,9.245" transform="translate(78.49 22.332)" fill="#faceb0"/>
            <path id="Path_14001" data-name="Path 14001" d="M41.808,25.061A26.936,26.936,0,0,0,36.982,22.6l-.1-.161a17.679,17.679,0,0,1-4.4,3.991l.1.084s3.2,6.417,6.417,5.7,2.814-2.319,1.461-5.39c2.511.828,3-.541,1.349-1.756" transform="translate(92.037 63.571)" fill="#faceb0"/>
            <path id="Path_14002" data-name="Path 14002" d="M41.5,67.832l5.348-8.986s-6.394-3.995-5.931-9.308,8.047-8.062,6.157-11.263,1.269-5.643,7.429-4.961c5.271.579,4.106-4.071,8.376-7.5.958,1.484,2.779,3.2,6.233,4.619,0,0,4.228,1.476,4.033,4.949a12.706,12.706,0,0,1-2.557,5.938s-3.408,5.283-2.465,9.185c0,0,.851,4.286,4.274,5.77,0,0-3.052,6.992-10.324,3.964a26.667,26.667,0,0,0,6.23,3.864l-2.235,9.649c-8.43-5.179-18.06-6.072-24.569-5.923" transform="translate(115.869 73.151)" fill="#d2a47e"/>
            <path id="Path_14003" data-name="Path 14003" d="M56.919,63.367C53.491,61.887,52.64,57.6,52.64,57.6c-.939-3.906,2.469-9.189,2.469-9.189a12.729,12.729,0,0,0,2.561-5.938c.188-3.469-4.037-4.945-4.037-4.945-3.454-1.422-5.279-3.14-6.237-4.623a5.579,5.579,0,0,1-1.031-3.4c0-5.321,10.837-6.187,10.837-6.187,22.856,0,26.091,25.566,26.091,25.566C83.654,75.558,63,73.5,63,73.5a24.678,24.678,0,0,1-10.178-2.3,26.773,26.773,0,0,1-6.23-3.864c7.268,3.032,10.324-3.964,10.324-3.964" transform="translate(131.348 66.062)"/>
            <path id="Path_14004" data-name="Path 14004" d="M98.364,199.257l17.182.153c.219-2.76-34.291-105.005-34.525-105.7a286.727,286.727,0,0,1-45.531,5.72c16.289,30.488,37.071,66.554,62.874,99.83" transform="translate(100.563 265.527)" fill="#d2a47e"/>
            <path id="Path_14005" data-name="Path 14005" d="M70.935,162.5l2.752-8.7c1.457,2.768,2.971,5.612,4.508,8.491a286.727,286.727,0,0,0,45.531-5.72l-.008-.015c.349-41.632-9.645-63.07-12.39-68.157-.031,0-60.54,5.72-89.82-16.814l-.008-.054-.023,0s-5.4,34.491,8.185,88.218A238.377,238.377,0,0,0,70.935,162.5" transform="translate(57.857 202.668)" fill="#1d2151"/>
            <path id="Path_14006" data-name="Path 14006" d="M22.831,94.537c7.395,29.242,20.4,64.166,43,102.371l17.293.153C83.765,194.19,64.1,97.3,64.1,97.3l0-.008a239.118,239.118,0,0,1-41.272-2.756" transform="translate(64.693 267.876)" fill="#d2a47e"/>
            <path id="Path_14007" data-name="Path 14007" d="M35.677,121.207l32.091.284.165.5c1.606,4.907-1.392,7.165-1.522,7.257l-.2.146H31.6c-2.312,0-3.347-1.445-3.347-2.879,0-2.553,2.841-5.309,7.426-5.309" transform="translate(80.051 343.448)"/>
            <path id="Path_14008" data-name="Path 14008" d="M53.491,121.207l32.091.284.165.5c1.606,4.907-1.392,7.165-1.522,7.257l-.2.146H49.412c-2.312,0-3.347-1.445-3.347-2.879,0-2.553,2.841-5.309,7.426-5.309" transform="translate(130.528 343.448)"/>
            <path id="Path_14009" data-name="Path 14009" d="M38.6,35.066c4.815-7.564,1.338-7.184.64-7.107s-5.275,6.555-7.675,7.165c-1.487.38-.721-3.864.725-9.584.886-3.5,4.585-9.653,3.975-12.053-1.1-4.29-10,8.48-13.1,12.336-.935,1.162-2.729,8.944-4.746,19.5l11.666-1.342c1.342-3.527,4.849-3.155,8.518-8.917" transform="translate(52.191 35.751)" fill="#d2a47e"/>
            <path id="Path_14010" data-name="Path 14010" d="M141.372,149.126c14.587-17.9,12.505-32.443,12.505-32.443-2.143-15.154-8.982-23.787-16.9-28.652-8.426-5.179-18.052-6.072-24.569-5.923-4.539.107-38.132,4.991-44.151,5.969C54.094,39.214,54.09,31.693,54.117,30.942l-9.572,1.1c-.529,7.962-.981,17.711-1.269,27.107C36.452,28.63,36.869,21.9,37.291,20.8L25.626,22.14C20.964,46.583,15.5,85.969,15.9,93.291c1.648,30.937,30.895,32.516,31.654,32.8-19.179,38.573-13.291,88.233-13.176,89.176l.008.05c29.281,22.534,89.79,16.818,89.82,16.818h0c-2.066-10.251-.909-36.277-.909-36.277,2.887-26.459,18.075-46.731,18.075-46.731" transform="translate(44.985 58.932)" fill="#d1d1d1"/>
            <path id="Path_14011" data-name="Path 14011" d="M40.479,30.613h0C32.762,21.1,21.357,19.96,20.705,17.453c-.652-2.522-1.277-2.871-3.623-1.825s-3.523,1.568-4.7,2.089-1.924,1.058-1.572,1.947c.947,2.4,6.391-1.472,6.391-1.472S32.141,41.439,35.676,45.8c.257.318,1.326.544,2.921.64-1.119.859-2.12,1.645-2.96,2.273-12.26-1.346-27.326,5.743-29.572,4.42s-2.933-1.127-3.853,1.273-1.38,3.6-1.844,4.8-.61,2.108.268,2.488C3,62.723,4.114,56.137,4.114,56.137s27,5.877,32.585,6.463a82.153,82.153,0,0,0,12.977-.69l-.081-.092c-2.174-2.354-7.008-8.38-8.073-15.641a37.922,37.922,0,0,1-1.043-15.564" transform="translate(0 42.715)" fill="#faceb0"/>
          </g>
        </Box>
      </Box>

      <Text as='h1' mb={{base: '60px'}} textAlign={'center'}>
        <Text as='span' display='block' {...texts.pretitle}>We all know what it takes</Text>
        <PreLine as='span' display='block' {...texts.title}>
          {`to be a
          champion on
          the field`}
        </PreLine>
      </Text>

      <Box px={{base: '20px'}}>
        <Text as='h3' mb={{base: '24px', d:'30px'}} textStyle='subheading'>You’ve got to be a team player, someone who does what’s best for your club. You’ve got to be bold enough to step up to the plate when the situation demands it – run the ball, make the tackle, perform under pressure. </Text>
        <PreLine textStyle='body'>
          {`And you’ve got to know what attributes you have to offer, be it your size, strength, or speed, and be willing to put them to good use.

          But what does it take to be a team player off the field? One way to help your fellow teammates in the game of life is to donate blood. `}
        </PreLine>
      </Box>

      <Figure my={{base: '59px'}}>
        <Img dimension='886x969' mock='intro-1' alt='man holding out a scarf' />
      </Figure>

      <PreLine px={{base: '20px'}} textStyle='body'>
        {`Did you know that in Australia, a new blood donation is needed every 18 seconds? That’s a whopping 33,000 donations every single week. So, to save lives, more Aussies need to step up, roll up their sleeves and look out for the entire team.

        Becoming a blood donor is heroic stuff – because while one in three Aussies will need blood or blood products in their lifetime, only one in 30 donates.

        And every donation makes a big difference. In fact, one blood donation can save up to three lives.`}
      </PreLine>
    </Box>
  )
}

// font styles
const texts = {
  pretitle: {
    color: '#5E0024',
    fontFamily: 'heading',
    fontSize: {base: '24px', sm: '27px'},
    lineHeight: {base: '26px', sm: '29px'},
  },
  title: {
    color: '#0D1D53',
    fontFamily: 'heading',
    fontSize: {base: '50px', sm: '60px'},
    lineHeight: {base: '56px', sm: '66px'},
  }
}

