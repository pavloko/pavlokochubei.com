import React from 'react'
import Link from 'gatsby-link'
import SocialLinks from '../components/SocialLinks'

class IndexPage extends React.Component {
  render() {
    return (
      <main role="main">
        <h1>I am Pavlo Kochubei.</h1>
        <p>My mission is building elegant, intuitive and intelligent software.</p>
        <p>I love education, design, code, and data.</p>
        <p>I currently work on <a href="https://www.tellproof.com/">TellProof.</a></p>
        <SocialLinks />
      </main>
    )
  }
}

export default IndexPage
