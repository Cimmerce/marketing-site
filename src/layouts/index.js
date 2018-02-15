import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Topbar from '../components/Topbar'
import Footer from '../components/Footer'

import './bootstrap/bootstrap.scss'
import './fonts/themify/themify-icons.css'
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

    <Topbar />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
