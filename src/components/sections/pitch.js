import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"

const PitchWrap = styled.div`
  text-align: center;
  padding-top: 60px;
  @media(max-width: 768px){
      padding: 30px;
  }
`

const PitchText = styled.div`
  h1 {
    line-height: 1;
    margin-bottom: 40px;
    font-size: 2rem;
    font-weight: 700;
    color: #1d2225;
    @media(max-width: 768px){
        font-size: 1.4rem;
        text-align: center;
        margin: 0;
    }
    @media(max-width: 480px){
        font-size: 1.2rem;
    }
  }
`

export default function Pitch() {

  const data = useStaticQuery(
    graphql`
      query PitchQuery {
        pitch: strapiPitch(strapiId: {eq: 1}) {
          pitch_text
        }
      }
    `
  )

  const pitch = data.pitch

  return (
    <div id="products">
      <PitchWrap>
        <PitchText>
          <h1>{pitch.pitch_text}</h1>
        </PitchText>
      </PitchWrap>
    </div>
  )
}