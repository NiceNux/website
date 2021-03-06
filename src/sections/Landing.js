import React, { Fragment } from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
// import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
// import SocialLink from '../components/SocialLink';
// import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import Particles from 'react-particles-js';
import Image from '../components/image'

// const Background = () => (
//   <div>
//     <Triangle
//       color="NN1"
//       height={['35vh', '80vh']}
//       width={['95vw', '60vw']}
//     />

//     <Triangle
//       color="NN2"
//       height={['38vh', '80vh']}
//       width={['50vw', '35vw']}
//     />

//     <Triangle
//       color="NN3"
//       height={['25vh', '35vh']}
//       width={['75vw', '60vw']}
//       invertX
//     />

//     <Triangle
//       color="NN4"
//       height={['20vh', '20vh']}
//       width={['100vw', '100vw']}
//       invertX
//       invertY
//     />
//   </div>
// );

const style = {
  backgroundColor: 'rgba(68, 131, 173, .5)'
}

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const roles = ['App Development', 'Serverless Architecture', 'Gamification Consulting']

// Background={Background}
const LandingPage = () => (
  <Section.Container id="home" style={style}> 
          <Particles style={{position: 'absolute'}}/>
          <Fragment style={{position: 'absolute'}}>
            <Flex mx={0}>
              <Box width={1/6}> </Box>
              <Box width={2/3}>
                <Image />
              </Box>
              <Box width={1/6}>   </Box>
            </Flex>
            <Heading
              textAlign="center"
              as="h2"
              color= 'primary'
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
            >
              {`Nice Nux Inovations`}
            </Heading>

            <Heading
              as="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={2000}
             springConfig={{ stiffness: 180, damping: 8 }}
             >
                {roles
                  .sort(() => Math.random() - 0.5)
                  .map(text => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>
          </Fragment>
  </Section.Container>
);

export default LandingPage;
