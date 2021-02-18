
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import "./logo.scss"

const LogoText = styled.p`
  display: inline-block;
  margin-bottom: 0;
`

export default function Logo () {

  const data = useStaticQuery(
    graphql`
      query NavigationQuery {
        logo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fixed(quality: 90, width: 54) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const logo = data.logo.childImageSharp.fluid
  console.log('hey==>>>', logo);


  return (
    <div class="logo-wrap">
      <Img 
        fixed={data.logo.childImageSharp.fixed}
        className="logo"
      />
      <LogoText>&nbsp; Altrian</LogoText>
    </div>
  )
}