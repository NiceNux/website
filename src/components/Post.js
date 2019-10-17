/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'gatsby'
import {Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'
//import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return(
        <Card>
            <CardBody>
                <a href={`https://nicenuxblog.netlify.com/blogpost/${slug}/`}>
                    <Img className="card-image-top" fluid={fluid} />
                </a>
                <CardTitle>
                    <a href={`https://nicenuxblog.netlify.com/blogpost/${slug}/`}>
                    {title}
                    </a>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info"> {date} </span> by
                    <span className="text-info"> {author} </span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags.map(tag => (
                        <li key={tag}>
                            {/* <Link to={`/tag/${tag}`}> */}
                                <Badge color="primary">
                                    {tag}
                                </Badge>
                            {/* </Link> */}
                        </li>
                    ))}
                </ul>
                <a href={`https://nicenuxblog.netlify.com/blogpost/${slug}/`} className="btn btn-outline-primary float-right"> Read More </a>
            </CardBody>
        </Card>
    )

}

export default Post