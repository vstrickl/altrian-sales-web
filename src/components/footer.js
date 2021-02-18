import React from "react"
import styled from "styled-components"

const FooterWrap = styled.div`
  margin-top: 2rem;
  background-color: #1d2225;
  position: relative;
  top: 50%;
  p {
      margin: 0;
      padding: 40px 20px 40px;
      color: #fff;
      a {
          text-decoration: none;
          color: #fff;
      }
  }
`

export default function Footer() {
  return (
    <FooterWrap>
      <p>
        <a href="/">Altrian</a> © {new Date().getFullYear()} All Rights Reserved
      </p>
    </FooterWrap>
  )
}