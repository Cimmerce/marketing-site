import React from 'react'
import PropTypes from 'prop-types'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

// Reset stylesheet
require('normalize.css')
require('../styles/base/base.module.scss')

const Header = () => (
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
  </div>
)

const TemplateWrapper = ({
  children
}) => (
    <div>
      {children()}
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
