import React, { Fragment } from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Form from '../components/Form';

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
  <Section.Container id="contact" Background={Background}>
    <Form />
  </Section.Container>
);
  
export default ContactPage;