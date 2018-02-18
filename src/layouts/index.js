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
      title="Augmented Reality for lifestyle ecommerce - Cimmerse"
      meta={[
        { name: 'description', content: 'Instant web and mobile AR for your business.' },
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
