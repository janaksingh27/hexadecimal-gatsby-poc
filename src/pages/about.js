import * as React from "react"
import Header from "../components/Header"

const AboutPage = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>About Us</h1>
        <p>This is a Gatsby Proof of Concept project created as part of my internship at Hexadecimal Software Pvt Ltd.</p>
      </main>
    </>
  )
}

export default AboutPage
