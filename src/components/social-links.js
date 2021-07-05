import React from "react"

import "./social-links.css"

const socialLinks = [
  {
    url: "https://medium.com/@pavlokochubei",
    name: "Blog",
  },
  {
    url: "https://github.com/pavloko",
    name: "Github",
  },
  {
    url: "https://www.facebook.com/pavlokochubei",
    name: "Facebook",
  },
  {
    url: "https://www.linkedin.com/in/pavlokochubei/",
    name: "LinkedIn",
  },
]

const SocialLinks = () => {
  return (
    <nav className="social-links" role="navigation">
      {socialLinks.map(link => {
        return (
          <a
            key={link.url}
            href={link.url}
            className="social-links__link"
            rel="noreferrer"
            target="_blank"
          >
            {link.name}
          </a>
        )
      })}
    </nav>
  )
}

export { SocialLinks }
