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
    {/* <form name="new-lolly" action="/new" method="POST">

<input type="color" id="flavourTop" name="flavourTop" value="#d52358" />
<input type="color" id="flavourMiddle" name="flavourMiddle" value="#e95946" />
<input type="color" id="flavourBottom" name="flavourBottom" value="#deaa43" />


<label for="recipientName">To</label>
<input type="text" id="recipientName" name="recipientName" />

<label for="message">Say something nice</label>
<textarea name="message" id="message" cols="30" rows="10"></textarea>

<label for="sendersName">From</label>
<input type="text" id="sendersName" name="sendersName" />

<input type="submit" value="Freeze this lolly and get a link" />

</form> */}
<Box
  as='form'
  action="/submitForm"
  method="POST"
  // onSubmit={e => e.preventDefault()}
  py={3}>
  <Flex mx={-2} mb={3}>
    <Box width={1/2} px={2}>
      <Label htmlFor='name'>Name</Label>
      <Input
        id='name'
        name='name'
        defaultValue='Jane Doe'
      />
    </Box>
    <Box width={1/2} px={2}>
      <Label htmlFor='location'>Location</Label>
      <Select
        id='location'
        name='location'
        defaultValue='NYC'>
        <option>NYC</option>
        <option>DC</option>
        <option>ATX</option>
        <option>SF</option>
        <option>LA</option>
      </Select>
    </Box>
  </Flex>
  <Flex mx={-2} flexWrap='wrap'>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='beep'
        name='beep'
        value='beep'
        defaultChecked
      />
      Beep
    </Label>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='boop'
        name='beep'
        value='boop'
      />
      Boop
    </Label>
    <Label width={[1/2, 1/4]} p={2}>
      <Checkbox
        id='remember'
        name='remember'
      />
      Remember Me
    </Label>
    <Box px={2} ml='auto'>
      <Button>
        Beep
      </Button>
    </Box>
  </Flex>
</Box>
  </Section.Container>
);
  
export default ContactPage;