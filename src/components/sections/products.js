import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Row, Col } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css'
import "./products.scss"

export default function Products() {

  const data = useStaticQuery(
    graphql`
      query HighlightQuery {
        product: strapiProductHighlight(strapiId: {eq: 2}) {
          products {
            product_name
            product_img {
              url
            }
          }
        }
      }
    `
  )

  const product = data.product

  return (
    <>
      <Row className={`product`}>
        <Col 
          className={`prod-img`}
          md={{ 
            size: 10, 
            order: 2, 
            offset: 1
          }}>
            <ul>
              {product.products.map(document => (
                <li key={document.id}>
                  {document.product_img.map(document => (
                    <div key={document.id}>
                    <img
                        src={document.url}
                        style={{width: "10%"}}
                        alt=""
                    />
                    </div>
                  ))}
                  <p class="product-name">{document.product_name}</p>
                </li>
              ))}
            </ul>
          </Col>
      </Row>
    </>
  )
}