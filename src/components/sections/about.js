import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Row, Col } from 'reactstrap'

import "./about.scss"
import 'bootstrap/dist/css/bootstrap.css'

export default function About() {

  const data = useStaticQuery(
    graphql`
      query AboutSectionQuery {
        about: file(relativePath: {eq: "about.jpg"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 696) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const about = data.about.childImageSharp.fluid

  return (
    <div id="about">
      <Row className="p-5 about">
        <Col xs="6" className="content p-5">
          <h1 className="about-title">About</h1>
          <p>Altrian prioritizes research and development, design and manufacturing to create innovative masks to meet the concerns and needs of our global citizens.</p>
          <p>Altrian BioChem Lab, LLC is registered in the state of Michigan as a life science research and development laboratory and manufacturer of personal protection therapeutic masks and Influenza early symptom detection kit.</p>              
          <p>Altrian-BioChem Lab operates under several fictitious names:<ul><li>Altrian</li><li>Altrian BioChem</li></ul></p>
        </Col>
        <Col xs="6">
          <Img fluid={about} />
        </Col>
      </Row>
    </div>
  )
}