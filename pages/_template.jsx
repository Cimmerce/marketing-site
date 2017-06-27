import React from 'react'

// Reset stylesheet
require('normalize.css')

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className='wrapper'>
        {children}
      </div>
    )
  }
}

export default Template
