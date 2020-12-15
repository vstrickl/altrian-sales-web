import React from "react"
import Image from "../components/image"

export default function Customers() {
  return (
    <div className="customers" id="customers">
      <div className="cust-img">
        <Image />
      </div>
      <div className="cust-content">
        <h1>Global Markets</h1>
        <ul>
          <li>Medical</li>
          <li>Consumer</li>
        </ul>
        <ul>
          <li>Government</li>
          <li>Corporation</li>
        </ul>
      </div>
    </div>
  )
}