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


const Background = () => (
  <div>
    <Triangle
      color="red"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color=""
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="grey"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
    />
  </div>
);


const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const roles = ['App Development', 'Serverless Architecture', 'Gamification Consulting']

const LandingPage = () => (

  <Section.Container id="home" Background={Background}>

     {/* <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `} */}
       {/* render={() => { */}
      
        
          <Fragment>
            <Image />
            <Heading
              textAlign="center"
              as="h2"
              color= 'primary'
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
            >
              {`We Are Nice Nux!`}
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

            {/* <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink> */}
          </Fragment>
      
       {/* } */}

  </Section.Container>
);

export default LandingPage;
