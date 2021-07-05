import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { SocialLinks } from "../components/social-links"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>I am Pavlo Kochubei.</h1>
    <p>My mission is building elegant, intuitive and intelligent software.</p>
    <p>I love education, design, code, and data.</p>
    <p>
      I currently work on{" "}
      <a target="_blank" rel="noreferrer" href="https://www.tellproof.com/">
        TellProof.
      </a>
    </p>
    <SocialLinks />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
