import React from "react"
import Image from "./path/assets/herbal.svg"

export default function Products() {
  return (
    <>
      <div className="product1" id="products">
        <div className="prod-img">
          <Image />
        </div>
        <p>Respiratory and Non-Neurological Therapeutic Face Mask (Herbal)</p>
      </div>
      <div className="product2">
        <p>Early Influenza Symptoms Detection Face Mask</p>
        <div className="prod-img">
          <Image />
        </div>
      </div>
      <div className="product3">
        <div className="prod-img">
          <Image />
        </div>
        <p>Immunization Face Mask</p>
      </div>
    </>
  )
}