import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pitch from "../components/pitch"
import Products from "../components/products"
import About from "../components/aboutW";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Pitch title="Why Us" />
    <Products title="Products" />
    <About title="About" />
  </Layout>
)

export default IndexPage
