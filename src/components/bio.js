/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import me from '../../content/assets/martijn-vos.jpg';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        alignItems: 'center'
      }}
    >
      <img
        src={me}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(3),
          height: rhythm(3),
          borderRadius: `50%`,
        }}
      />
      <p style={{ marginBottom: 0 }}>
        A software blog showcasing and documenting learnings. <br />
        Curated by <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer"><strong>{author}</strong></a>.
      </p>
    </div>
  )
}

export default Bio
