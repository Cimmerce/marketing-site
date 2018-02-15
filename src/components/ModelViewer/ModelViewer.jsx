import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './ModelViewer.module.scss'

class ModelViewer extends Component {
  componentDidMount() {
    this.configureViewer()
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.modelViewer}>
          <div id="cimmerseViewerPlaceholder" className={styles.placeholder}>
            <img
              src={`https://d31wrld7eatxzf.cloudfront.net/${this.props.modelId}/meta/preview_image.png`}
              className={styles.previewImage}
            />
          </div>
        </div>
      </div>
    )
  }

  configureViewer () {
    const self = this
    window.getCimmerseTenantConfig = () => {
      return {
        modelId: self.props.modelId,
        targetSelector: '#cimmerseViewerPlaceholder',
        trackingLabel: 'marketingFrontpage',
        visibleWhileLoading: true,
        placeholderStyles: `
        #CimmersePlaceholder {
          position: relative;
          width: 100%;
          height: 100%;
        }
        `,
        limitInteractionAreaOnMobile: true
      }
    }

    window.getCimmerseViewerConfig = () => {
      return {
        transparentMode: true,
        autorotateOverride: 0
      }
    }
  }
}

ModelViewer.propTypes = {
  modelId: PropTypes.string
}

export default ModelViewer
