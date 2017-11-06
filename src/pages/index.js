import React from 'react'
import Link from 'gatsby-link'
import SocialLinks from '../components/SocialLinks'

class IndexPage extends React.Component {
  render() {
    return (
      <main>
        <h1>I am Pavlo Kochubei.</h1>
        <p>
          My mission is building elegant, intuitive and intelligent software for
          teachers and students.
        </p>
        <p>I love people, design, code, and data.</p>
        <p>
          I currently work on <a href="https://www.engly.co/">Engly.</a>
        </p>
        <SocialLinks />
      </main>
    )
  }
}

export default IndexPage
