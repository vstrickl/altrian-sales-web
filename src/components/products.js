import React from "react"
import Image from "../components/image2"

export default function Products() {
  return (
        <div className="products" id="products">
          <div className="content">
          <h1>Products</h1>
            <p>Introducing Therapeutic Infused Face Mask</p>
            <ul>
              <li>Respiratory & Non-Neurological Therapeutic Face Mask (Herbal)</li>
              <li>Early Influenza Symptoms Detection Face Mask</li>
              <li>Immunization Face Mask</li>
            </ul>
            </div>
            <div className="prod-img">
              <Image />
            </div>
        </div>
  )
}