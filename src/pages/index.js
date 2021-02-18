import React from "react"
import { graphql } from 'gatsby'

import BannerImg from 'gatsby-background-image'

import Layout from "../components/layout"

import Highlight from "../components/sections/highlight"
import Pitch from "../components/sections/pitch"
import Products from "../components/sections/products"
import About from "../components/sections/about"

import { Container, Row } from 'reactstrap'

import "./index.scss"
import 'bootstrap/dist/css/bootstrap.css'

export default function IndexPage ({ data }) {

  const bannerImg = data.banner.childImageSharp.fluid
  console.log('hey==>>>', bannerImg);

  return (
    <Layout>
      <BannerImg
        Tag="section"
        className={`banner`}
        fluid={bannerImg}
        alt=""
      >
      <Container fluid={true}>
        <Row className="banner-text">
          <h2>Innovation in the everyday use of face masks</h2>
          <h3>All while providing everyday protection</h3>
          <ul>
            <li>Therapeutic Delivery</li>
            <li>Prescription Delivery</li>
            <li>Relaxation</li>
          </ul>
          </Row>
      </Container>
      </BannerImg>
      <Highlight />
      <div className="content-wrapper">
        <Pitch title="Why Us" />
        <div className="inner-wrapper">
          <Products title="Products" />
        </div>
        <About title="About" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    banner: file(relativePath: {eq: "banner2_crop.png"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`