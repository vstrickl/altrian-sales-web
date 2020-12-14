import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Altrian</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/pitch">Why Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/customers">Who We Serve</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header