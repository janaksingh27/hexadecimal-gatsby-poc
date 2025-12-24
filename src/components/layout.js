/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"    // <-- SEO support

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{data.site.siteMetadata?.title || `Hexadecimal Gatsby Blog`}</title>
        <meta
          name="description"
          content={
            data.site.siteMetadata?.description ||
            "Gatsby POC blog for Hexadecimal Software internship"
          }
        />
      </Helmet>

      {/* Header */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {/* Main Content */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>

        {/* Footer */}
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
