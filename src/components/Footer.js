import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text, Box, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.footer`
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.background};

  & a {
    color: ${props => props.theme.colors.background};
  }
`;
  
const socialLinks = 
  [
    {
      id: "1",
      fontAwesomeIcon: "github",
      name: "GitHub", 
      url: "https://www.github.com/NiceNux"
    },
    {
      id: "2",
      fontAwesomeIcon: "facebook",
      name: "Facebook", 
      url: "https://www.facebook.com/Nice-Nux-102855471280387"
    },
    {
      id: "3",
      fontAwesomeIcon: "twitter",
      name: "Twitter", 
      url: "https://www.Twitter.com/NiceNux"
    },
    {
      id: "4",
      fontAwesomeIcon: "envelope",
      name: "Email", 
      url: "mailto:sales@nicenux.com", 
    },
  ]

const Footer = () => (
  <Box p={3} backgroundColor="#4b007d">
    <FooterContainer>
      <Fade left>
        <TextFooter fontSize={[2, 3]}>
          <Link to="/team/">
            Learn more about<br />
            Nice Nux Innovations
          </Link>
        </TextFooter>
      </Fade>
      <Flex>
        <Fade right>
          {socialLinks.map(({ id, ...rest }) => (
            <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
              <SocialLink {...rest} color="white" />
            </Box>
          ))}
        </Fade>
      </Flex>
    </FooterContainer>
  </Box>
);

export default Footer;