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

  const banner = data.banner

  return (
    <Layout>
      <BannerImg
        Tag="section"
        className={`banner`}
        fluid={banner.banner_img.childImageSharp.fluid}
        alt=""
      >
      <Container fluid={true}>
        <Row className="banner-text">
          <h2>{banner.lead}</h2>
          <h3>{banner.sublead}</h3>
          <div dangerouslySetInnerHTML={{ __html: banner.lead_details }} />
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
    banner: strapiBanner(strapiId: {eq: 1}) {
      lead
      sublead
      lead_details
      banner_img {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`