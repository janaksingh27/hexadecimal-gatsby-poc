import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/contact" style={{ marginRight: "1rem" }}>Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  )
}

export default Header
