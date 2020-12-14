import React from "react"
import Image from "../components/image"

export default function Customers() {
  return (
    <div className="customers">
      <div className="cust-img">
        <Image />
      </div>
      <div className="cust-content">
        <h1>Who We Serve</h1>
        <p>We provide Health Care Workers, Educators, Government and Corporate Entities with Disposable and Pharmaceutically Infused Non-Woven Face Masks.</p>
      </div>
    </div>
  )
}