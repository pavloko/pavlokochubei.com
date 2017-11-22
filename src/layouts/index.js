import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import favicon from '../../favicon.ico'

const TemplateWrapper = ({ children }) => [
  <Helmet key="1">
    <title>Pavlo Kochubei | Teacher. Engineer. Designer</title>
    <link rel="icon" href={favicon} type="image/x-icon" />
    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta
      name="description"
      content="Personal website of Pavlo Kochubei. Teacher. Engineer. Designer. My thought on products, education and technology."
    />
    <meta
      name="keywords"
      content="education, ESL, education technology, ux, ui, spaced-repetition, call"
    />
  </Helmet>,
  <div key="2" className="wrapper">
    {children()}
  </div>,
]

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
