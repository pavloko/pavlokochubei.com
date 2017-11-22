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
    <script>
        {(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:700184,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')}
    </script>
  </Helmet>,
  <div key="2" className="wrapper">
    {children()}
  </div>,
]

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
