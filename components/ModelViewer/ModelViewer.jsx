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
    if(window) {
      this.configureViewer()
    }
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
    const embedScript = window.document.querySelector(`#${scriptId}`)

    if(embedScript) {
      embedScript.addEventListener('load', event => {
        Cimmerce.configure({
          modelId: this.props.modelId,
          container: `#${this.containerId}`
        })
      })
    } else {
      setTimeout(this.configureViewer.bind(this), 100)
    }
  }
}

ModelViewer.propTypes = {
  modelId: PropTypes.string.isRequired
}

export default ModelViewer