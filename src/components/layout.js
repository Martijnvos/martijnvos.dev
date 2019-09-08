import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

// Mozilla CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons
// https://commons.wikimedia.org/wiki/File:Fxemoji_u1F41E.svg
import Ladybug from '../../content/svg/ladybug.svg';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.9),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(2.5),
            paddingTop: rhythm(1),
          }}
        >
          <p>
            <Ladybug height="20px" width="20px" fill="#F13333" /> Found a bug? Please <a href="https://github.com/Martijnvos/martijnvos.dev/issues">file an issue on GitHub</a>
          </p>
          <a
            href="https://mobile.twitter.com/vosdevelopment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          &bull;{' '}
          <a
            href="https://github.com/martijnvos"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
