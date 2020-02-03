/* eslint-disable no-unused-vars */
import React from 'react'
import {Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'

const Profile = ({ name, description, fluid, url }) => {
    return(
        <Card>
            <CardBody>
                <a href={`${url}`}>
                    <Img className="card-image-top" fluid={fluid} />
                </a>
                <CardTitle>
                    <a href={`${url}`}>
                        {name}
                    </a>
                </CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )

}

export default Profile