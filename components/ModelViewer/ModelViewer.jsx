/* global Cimmerce */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styles from './ModelViewer.scss'

const scriptId = 'cimmerce-embed-script'

class ModelViewer extends Component {
  constructor(props) {
    super(props)

    this.containerId = `viewer-${props.modelId}`
  }

  componentDidMount() {
    this.configureViewer()
  }

  render() {
    return (
      <div className={styles.container}>
        <Helmet>
          <script
            src='https://embed.cimmerce.com/v1/embed.js'
            id={scriptId}
          ></script>
        </Helmet>

        <div
          id={this.containerId}
          className={styles.container}
        ></div>
      </div>
    )
  }

  configureViewer() {
    if(typeof(Cimmerce) === 'object') {
      Cimmerce.configure({
        modelId: this.props.modelId,
        container: `#${this.containerId}`,
        transparent: true,
        autorotate: this.props.autorotate,
        visiblewhileloading: true,
        onload: this.props.onLoad,
        oninteraction: this.props.onUserInteraction
      })
    } else {
      // Clunky way of waiting for script, only relevant for development
      setTimeout(this.configureViewer.bind(this), 100)
    }
  }
}

ModelViewer.propTypes = {
  modelId: PropTypes.string.isRequired,
  autorotate: PropTypes.number,
  onLoad: PropTypes.func,
  onUserInteraction: PropTypes.func
}

export default ModelViewer