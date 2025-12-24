import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const BlogPage = () => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Blog posts from Hexadecimal Gatsby POC project developed during internship"
      />

      <h1>Blog Posts</h1>

      <div>
        <h2>My First Blog Post</h2>
        <p>2025-12-22</p>
        <p>
          This is my first <strong>Gatsby POC</strong> blog post for Hexadecimal
          Software.
        </p>

        <StaticImage
          src="../images/blog1.jpg"
          alt="First Blog Image"
          placeholder="blurred"
          layout="constrained"
          width={600}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Second Blog Post</h2>
        <p>2025-12-23</p>
        <p>
          This is my second <strong>Gatsby POC</strong> blog post for Hexadecimal
          Software.
        </p>

        <StaticImage
          src="../images/blog2.jpg"
          alt="Second Blog Image"
          placeholder="blurred"
          layout="constrained"
          width={600}
        />
      </div>
    </Layout>
  )
}

export default BlogPage
