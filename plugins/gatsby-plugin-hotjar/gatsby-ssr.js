import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-hotjar`}
        dangerouslySetInnerHTML={{
          __html: `
          if (location.host === 'pavlokochubei.com') {
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:700184,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
          }
          `,
        }}
      />,
    ])
  }

  return null
}