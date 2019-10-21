import React from 'react'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback
} from 'reactstrap';
import Fade from 'react-reveal/Fade'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      email: '',
      message: '',
      requestUpdates: '',
      validate: {
        emailState: '',
        messageState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'valid'
      } else {
        validate.emailState = 'invalid'
      }
      this.setState({ validate })
  }

  validateMessage(e) {
    const messageLengthMin = 10
    const { validate } = this.state
      if (e.target.value.length >= messageLengthMin) {
        validate.messageState = 'valid'
      } else {
        validate.messageState = 'invalid'
      }
      this.setState({ validate })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  render() {
    const { email, message, requestUpdates } = this.state;
    return (
      <Fade left>
      <Container className="App">
        <h2>Contact Us</h2>
        <Form className="form" action="/submitForm" method="POST">
          <Col>
            <FormGroup row>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'valid' }
                invalid={ this.state.validate.emailState === 'invalid' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback>
                Please input a valid email.
              </FormFeedback>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup row>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                rows="6"
                name="message"
                id="message"
                placeholder="Enter message here"
                value={ message }
                valid={ this.state.validate.messageState === 'valid' }
                invalid={ this.state.validate.messageState === 'invalid' }
                onChange={ (e) => {
                            this.validateMessage(e)
                            this.handleChange(e)
                          } }

              />
              <FormFeedback>
                Please input a more detailed message.
              </FormFeedback>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup row>
              <Label for="requestUpdates">I want to be the first to know about product updates!</Label>
                  <Input
                    type="checkbox"
                    name="requestUpdates"
                    id="requestUpdates"
                  />
            </FormGroup>
            </Col>
          <Button disabled={!(this.state.validate.emailState === 'valid' && this.state.validate.messageState === 'valid')}>Submit</Button>
        </Form>
      </Container>
      </Fade>
    );
  }
}

export default ContactForm