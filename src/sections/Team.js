import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col, CardBody, Container } from 'reactstrap'
import Particles from 'react-particles-js';
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import Profile2 from '../components/Profile2'
import Fade from 'react-reveal/Fade';
import { CardContainer, Card } from '../components/Card';

// const Background = () => (
//   <div>
//     {/* <Triangle
//       color="NN1"
//       height={['100vh', '7vh']}
//       width={['100vw', '6vw']}
//       invertY
//       invertX
//     /> */}

//     {/* <Triangle
//       color="primary"
//       height={['100vh', '30vh']}
//       width={['100vw', '100vw']}
//       // invertY
//     /> */}

//     <Triangle
//       color="NN2"
//       height={['100vh', '50vh']}
//       width={['100vw', '100vw']}
//       invertY
//     />

//     <Triangle
//       color="#f0f0f0"
//       height={['100vh', '21vh']}
//       width={['100vw', '49vw']}
//       invertY
//     />

//     <Triangle
//       color="NN3"
//       height={['25vh', '20vh']}
//       width={['100vw', '100vw']}
//     />

//     <Triangle
//       color="NN1"
//       height={['80vh', '80vh']}
//       width={['100vw', '100vw']}
//       invertX
//     />

//     <Triangle
//       color="NN2"
//       height={['50vh', '20vh']}
//       width={['50vw', '50vw']}
//       invertX
//     />

//     {/* <Triangle
//       color="NN3"
//       height={['25vh', '40vh']}
//       width={['75vw', '60vw']}
//       invertX
//       invertY
//     /> */}
//   </div>
// );

const style = {
  backgroundColor: 'rgba(68, 131, 173, .5)'
}

const TeamPage = () => (
  <Section.Container id="blog" style={style}>
    <Section.Header name="Team" icon="🙋‍♂️" label="person"/>
    <Particles style={{position: 'absolute'}}/>
    {/* <div style={{overflow: 'hidden', position: 'absolute'}}> */}
      <StaticQuery query={indexQuery} render={data => {
      return (
        <>
          <Fade left>
            <Container className="themed-container" fluid={true}>
              {data.allContentfulTeam.edges.map(({ node }) =>(
                <Row style={{top: "50px"}}>
                  <Profile2
                    key={node.id} 
                    name={node.name}
                    description={node.description.description}
                    fluid={node.picture.fluid}
                  />
                  <Row>.</Row>
                  <Row>.</Row>
                  <Row>.</Row>
                </Row>
              ))}
            </Container>
          </Fade>
        </>
      )
    }}/>
    {/* </div> */}
  </Section.Container>
);

const indexQuery = graphql`
query TeamPageQuery {
  allContentfulTeam(limit: 5) {
    edges{
      node{
        id
        name
        description {
          description
        }
        picture {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

export default TeamPage;
