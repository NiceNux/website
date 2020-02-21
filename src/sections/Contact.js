import React, { Fragment } from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Form from '../components/Form';
import Particles from 'react-particles-js';

const Background = () => (
  <div>
    <Triangle
      color="NN1"
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />

    <Triangle
      color="NN2"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="NN3"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="NN4"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const style = {
  backgroundColor: 'rgba(68, 131, 173, .5)'
}

const ContactPage = () => (
  <Section.Container id="contact" style={style}>
    <Section.Header name="Contact" icon="✍️" label="contact" />
    <Particles style={{position: 'absolute'}}/>
    <Form style={{position: 'absolute'}}/>
  </Section.Container>
);
  
export default ContactPage;