import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"

const BlogPage = ({ data }) => {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Blog Posts</h1>

        {data.allMdx.nodes.map(node => (
          <article key={node.frontmatter.title} style={{ marginBottom: "2rem" }}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.body}</p>
          </article>
        ))}
      </main>
    </>
  )
}

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
        }
        body
      }
    }
  }
`

export default BlogPage
