import React from 'react'
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms'
import { Heading, Flex, Box, Text, Button } from 'rebass';

const validate = ({ email, message }) => {
  const errors = {}
 
  if (!email) errors.email = 'Email address is required'
 
  if (!message) errors.message = 'Message is required'
 
  return errors
}

class Form extends React.Component {
  state = {
    email: '',
    message: '',
    requestUpdates: '',
  }

  render() {
    return (
      <Box
      as='form'
      action="/submitForm" 
      method="POST"
      validate={validate}
      py={3}>
      <Flex mx={-2} mb={3}>
        <Box width={1/2} px={2}>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type="email"
            placeholder='example@email.com'
          />
        </Box>
      </Flex>
      <Flex mx={-2} mb={3}>
        <Box width={1/2} px={2}>
          <Label htmlFor='message'>Message</Label>
          <Textarea
          rows="10"
          id='message'
          name='message'
          type='text'
          placeholder='Enter inquery here'
        />
        </Box>
      </Flex>
      <Flex mx={-2} flexWrap='wrap'>
        <Label width={[1/2, 1/4]} p={2}>
          <Checkbox
            id='requestUpdates'
            name='requestUpdates'
          />
          Receive Updates
        </Label>
        <Box px={10} width={1/4}>
          <Button bg='#008CBA'>
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
    );
  }
}

export default Form