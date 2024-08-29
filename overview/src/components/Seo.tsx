import React from 'react'
import Helmet from 'react-helmet'

function Seo( props: {title: string, desc: string} ) {
  return (
    <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.desc} />
    </Helmet>
  )
}

export default Seo