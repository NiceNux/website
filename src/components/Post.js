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
                <Link to={`nicenuxblog.netlify.com/blogpost/${slug}/`}>
                    <Img className="card-image-top" fluid={fluid} />
                </Link>
                <CardTitle>
                    <Link to={`nicenuxblog.netlify.com/blogpost/${slug}/`}>
                    {title}
                    </Link>
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
                <Link to={`nicenuxblog.netlify.com/blogpost/${slug}/`} className="btn btn-outline-primary float-right"> Read More </Link>
            </CardBody>
        </Card>
    )

}

export default Post