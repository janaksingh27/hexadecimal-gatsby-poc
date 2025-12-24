import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const BlogPage = () => (
  <Layout>
    <h1>Blog Posts</h1>

    <h2>First Blog Post</h2>
    <p>2025-12-22</p>
    <p>This is my first <strong>Gatsby POC</strong> blog post for Hexadecimal Software internship.</p>
    <StaticImage
      src="../images/blog1.jpg"
      alt="Blog 1 Image"
      placeholder="blurred"
      layout="constrained"
      width={600}
    />

    <h2>Second Blog Post</h2>
    <p>2025-12-23</p>
    <p>This is my second <strong>Gatsby POC</strong> blog post for Hexadecimal Software internship.</p>
    <StaticImage
      src="../images/blog2.jpg"
      alt="Blog 2 Image"
      placeholder="blurred"
      layout="constrained"
      width={600}
    />
  </Layout>
)

export default BlogPage
