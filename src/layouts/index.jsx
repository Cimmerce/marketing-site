import React from 'react'
import PropTypes from 'prop-types'

// Reset stylesheet
require('normalize.css')
require('../styles/base/base.module.scss')

const TemplateWrapper = ({
  children
}) => children()

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
