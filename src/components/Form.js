import React from 'react'
// import {
//   Label,
//   Input,
//   Select,
//   Textarea,
//   Radio,
//   Checkbox,
// } from '@rebass/forms'
// import { Heading, Flex, Box, Text, Button } from 'rebass';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Fade from 'react-reveal/Fade'

class ContactForm extends React.Component {
  state = {
    email: '',
    message: '',
    requestUpdates: '',
  }

  render() {
    return (
      <Fade left>
      <Container className="App">
        <h2>Contact Us</h2>
        <Form className="form" action="/submitForm" method="POST">
            <FormGroup row>
              <Label>Email</Label>
              <Col>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="message">Message</Label>
              <Col>
              <Input
                type="textarea"
                rows="10"
                name="message"
                id="message"
                placeholder="Enter message here"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="requestUpdates">Receive Updates</Label>
              <Col>
              <Input
                type="checkbox"
                name="requestUpdates"
                id="requestUpdates"
              />
              </Col>
            </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
      </Fade>
    //   <Box
    //   as='form'
    //   action="/submitForm" 
    //   method="POST"
    //   py={3}>
    //   <Flex mx={-2} mb={3}>
    //     <Box width={1/2} px={2}>
    //       <Label htmlFor='email'>Email</Label>
    //       <Input
    //         id='email'
    //         name='email'
    //         type="email"
    //         placeholder='example@email.com'
    //       />
    //     </Box>
    //   </Flex>
    //   <Flex mx={-2} mb={3}>
    //     <Box width={1/2} px={2}>
    //       <Label htmlFor='message'>Message</Label>
    //       <Textarea
    //       rows="10"
    //       id='message'
    //       name='message'
    //       type='text'
    //       placeholder='Enter message here'
    //     />
    //     </Box>
    //   </Flex>
    //   <Flex mx={-2} flexWrap='wrap'>
    //     <Label width={[1/2, 1/4]} p={2}>
    //       <Checkbox
    //         id='requestUpdates'
    //         name='requestUpdates'
    //       />
    //       Receive Updates
    //     </Label>
    //     <Box px={10} width={1/4}>
    //       <Button bg='#008CBA'>
    //         Submit
    //       </Button>
    //     </Box>
    //   </Flex>
    // </Box>
    );
  }
}

export default ContactForm