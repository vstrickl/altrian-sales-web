import React from "react"
import "../styles/styles.scss"

import Header from "../components/header"
import SEO from "../components/seo"
import Pitch from "../components/pitch"
import Products from "../components/products"
import About from "../components/about";
import Customers from "../components/customers"
import Banner from "../components/banner"
import Highlight from "../components/highlight"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <SEO title="Home" />
    <Highlight />
    <div className="content-wrapper">
      <Pitch title="Why Us" />
      <div className="inner-wrapper">
        <Products title="Products" />
        <Customers title="Customers" />
      </div>
      <About title="About" />
    </div>
    <Footer />
  </div>
)

export default IndexPage
