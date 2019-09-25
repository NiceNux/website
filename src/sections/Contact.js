import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms'
import React, { Fragment } from 'react';
import { Heading, Flex, Box, Text, Button } from 'rebass';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    {/* <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    /> */}

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);



const ContactPage = () => (
  <Section.Container id="home" Background={Background}>
    <form name="new-lolly" action="/submitForm" method="POST">
      {/* <label for="recipientName">To</label> */}
      <input type="text" id="name" name="name" />

      {/* <label for="message">Say something nice</label> */}
      {/* <textarea name="message" id="message" cols="30" rows="10"></textarea> */}

      {/* <label for="sendersName">From</label> */}
      {/* <input type="text" id="sendersName" name="sendersName" /> */}

      <input type="submit" value="submit" />

    </form>
    {/* <Box
      as='form'
      action="/submitForm"
      method="POST"
      // onSubmit={e => e.preventDefault()}
      py={3}>
      <Flex mx={-2} mb={3}>
        <Box width={1/2} px={2}>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            defaultValue='test6@test.com'
          />
        </Box>
        <Box width={1/2} px={2}>
          <Label htmlFor='message'>Message</Label>
            <Input
              id='message'
              name='message'
              defaultValue='11111111111'
            />
        </Box>
      </Flex>
      <Flex mx={-2} flexWrap='wrap'>
        <Label width={[1/2, 1/4]} p={2}>
          <Checkbox
            id='reqUpdates'
            name='reqUpdates'
          />
          Subscribe
        </Label>
        <Box px={2} ml='auto'>
          <button type="submit">
            Submit
          </button>
        </Box>
      </Flex>
    </Box> */}
  </Section.Container>
);
  
export default ContactPage;