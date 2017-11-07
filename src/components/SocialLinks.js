import React from 'react'

import './SocialLinks.css'

const socialLinks = [
  {
    url: 'https://medium.com/@pavlokochubei',
    name: 'Blog'
  },
  {
    url: 'https://www.facebook.com/pavlokochubei',
    name: 'Facebook'
  },
  {
    url: 'https://www.linkedin.com/in/pavlokochubei/',
    name: 'LinkedIn'
  }
]

const SocialLinks = () => {
  return (
    <nav className='social-links' role="navigation">
      {socialLinks.map(link => {
         return (
           <a
             key={link.url}
             href={link.url}
             className='social-links__link'
             target='_blank'>
             {link.name}
           </a>
         )
       })}
    </nav>
  )
}

export default SocialLinks
