/* eslint-disable no-unused-vars */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col, Card, CardBody } from 'reactstrap'
import Triangle from '../components/Triangle';
import Section from '../components/Section';
import Post from '../components/Post'
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

const Background = () => (
  <div>
    <Triangle
      color="NN1"
      height={['50vh', '20vh']}
      width={['50vw', '48.5vw']}
      invertY
    />

    <Triangle
      color="NN2"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="NN4"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const style = {
  backgroundColor: 'rgba(68, 131, 173, .5)'
}

const BlogPage = () => (   
  <Section.Container id="blog" style={style}>
    <Section.Header name="Blog" icon="✍️" label="blog" />
    <Particles style={{position: 'absolute'}}/>
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
          <Row>.</Row>
          <Fade right>
            <a style={{borderRadius: "30px"}} href={`https://nicenuxblog.netlify.com/`} className="btn btn-primary float-center"> See All Posts </a>
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

export default BlogPage