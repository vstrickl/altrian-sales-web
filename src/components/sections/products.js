import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Row, Col } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css'
import "./products.scss"

export default function Products() {

  const data = useStaticQuery(
    graphql`
      query ProductsQuery {
        productone: file(relativePath: {eq: "flower_shadow.svg"}) {
          publicURL
        }
      }
    `
  )

  const productone = data.productone.publicURL

  return (
    <>
      <Row className={`product1`}>
        <Col 
          className={`prod-img`}
          md={{ 
            size: 10, 
            order: 2, 
            offset: 1
          }}>
            <img src={productone} style={{width: "10%"}} />
            <p class="product-name">Therapeutic Face Mask (Herbal)</p>
          </Col>
      </Row>
    </>
  )
}