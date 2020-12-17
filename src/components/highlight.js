import React from "react"

export default function Highlight() {
  return (
    <div>
      <div className="highlight" id="customers">
        <div className="cust-content">
          <h1>Global Markets</h1>
          <div className="wrapper">
          <ul>
            <li>Medical</li>
            <li>Consumer</li>
            <li>Government</li>
          </ul>
          <ul className="last">
            <li>Corporate</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}