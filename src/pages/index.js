import React from "react"
import "../styles/styles.scss"

import SEO from "../components/seo"
import Pitch from "../components/pitch"
import Products from "../components/products"
import About from "../components/about";
import Banner from "../components/banner"
import Highlight from "../components/highlight"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const IndexPage = () => (
  <div className="wrapper">
    <Navbar />
    <Banner />
    <SEO title="Home" />
    <Highlight />
    <div className="content-wrapper">
      <Pitch title="Why Us" />
      <div className="inner-wrapper">
        <Products title="Products" />
      </div>
      <About title="About" />
    </div>
    <Footer />
  </div>
)

export default IndexPage
