import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import './bootstrap/bootstrap.scss'
import './theme/theme.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Cimmerse: AR-enabled mobile web sales"
      meta={[
        { name: 'description', content: 'Augmented reality for mobile ecommerce websites' },
        { name: 'keywords', content: 'AR, mobile AR, augmented reality, WebAR, VR, virtual reality, 3D, ecommerce' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
