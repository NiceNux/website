import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import Contact from '../sections/Contact';
// import Projects from '../sections/Projects';
// import Writing from '../sections/Writing';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Contact />
    {/*<Projects />
    <Writing />
    <Footer /> */}
  </Layout>
);

export default IndexPage;
