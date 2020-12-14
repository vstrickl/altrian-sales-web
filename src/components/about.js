import React from "react"
import Image from "../components/image"

export default function About() {
  return (
      <div>
          <h1>About</h1>
            <div className="about-content">
              <p>Altrian prioritizes research and development, design and manufacturing to create innovative masks to meet the concerns and needs of our global citizens.</p>
              <p>Altrian BioChem Lab, LLC is registered in the state of Michigan as a life science research and development laboratory and manufacturer of personal protection therapeutic masks and Influenza early symptom detection kit.</p>              
              <p>Altrian-BioChem Lab operates under several fictitious names:<ul><li>Altrian</li><li>Altrian BioChem</li></ul></p>
            </div>
            <Image />
        </div>
  )
}