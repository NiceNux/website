/* eslint-disable no-unused-vars */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col, Card, CardBody } from 'reactstrap'
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import Post from '../components/Post'
import Fade from 'react-reveal/Fade';

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

const IndexPage = () => (   
  <Section.Container id="blog" Background={Background}>
      <StaticQuery query={indexQuery} render={data => {
      return (
        <>
        <Fade left>
        <Row>
          {data.allContentfulBlogPost.edges.map(({ node }) =>(
            <Col>
              <Post
                key={node.id} 
                title={node.title}
                author={node.author}
                slug={node.slug}
                date={node.date}
                body={node.desc.desc}
                fluid={node.image.fluid}
                tags={node.tags}
              />
            </Col>
          ))}
        </Row>
        </Fade>
        <Fade right>
        <a href={`https://nicenuxblog.netlify.com/`} className="btn btn-primary float-center"> See All Posts </a>
        </Fade>
        </>
      )
    }}/>
  </Section.Container>
)

const indexQuery = graphql`
query BlogPostsPageQuery {
  allContentfulBlogPost(limit: 3) {
    edges{
      node{
        id
        title
        date(formatString: "MMM Do YYYY" )
        author
        tags
        desc {
          desc
        }
        slug
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

export default IndexPage