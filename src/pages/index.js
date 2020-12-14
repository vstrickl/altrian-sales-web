import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pitch from "../components/pitch"
import Products from "../components/products"
import About from "../components/about";
import Customers from "../components/customers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Pitch title="Why Us" />
    <Products title="Products" />
    <Customers title="Customers" />
    <About title="About" />
  </Layout>
)

export default IndexPage
