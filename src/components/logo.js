
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #1d2225;
    font-size: 2.25rem;
    text-transform: uppercase;
}
`

const Logo = () => {
  return (
    <LogoWrap>
      <Link to="/">Altrian</Link>
    </LogoWrap>
  )
}

export default Logo