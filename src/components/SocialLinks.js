import React from 'react'

import './SocialLinks.css'

const socialLinks = [
  {
    url: 'https://medium.com/@pavlokochubei',
    name: 'Blog',
  },
  {
    url: 'https://www.facebook.com/pavlokochubei',
    name: 'Facebook',
  },
  {
    url: 'https://www.linkedin.com/in/pavlokochubei/',
    name: 'LinkedIn',
  },
]

const SocialLinks = () => {
  return (
    <ul className="social-links">
      {socialLinks.map(link => {
        return (
          <li key={link.url}>
            <a className="social-links__link" href={link.url} target="_blank">
              {link.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
