import React from 'react'

// Reset stylesheet
require('normalize.css')
require('../styles/base/base.scss')

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Template