import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from 'react-helmet'

import fullCircleSrc from './circle.svg'
import emptyCircleSrc from './circle-o.svg'

import styles from './ModelCarousel.scss'

class ModelCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentModelId: props.modelIds[0]
    }

    this.displaySeconds = props.displaySeconds || 15
    this.carouselIsRunning = true

    this.bindMethods()
  }

  bindMethods() {
    this.loadNextModel = this.loadNextModel.bind(this)
    this.handleModelLoaded = this.handleModelLoaded.bind(this)
    this.handleUserInteraction = this.handleUserInteraction.bind(this)
    this.handleSwithcerAnchorClicked = this.handleSwithcerAnchorClicked.bind(this)
  }

  componentDidMount() {
    this.configureViewer()
  }

  render() {
    return (
      <div className={styles.container}>
        <Helmet>
          <script async src='https://embed.cimmerse.com/v2/tenants/cimmerse-marketing-site.js'></script>
        </Helmet>
        <div className={styles.modelViewer}>
          <div id="cimmerseViewerPlaceholder" className={styles.placeholder}>
            <img
              src="https://d31wrld7eatxzf.cloudfront.net/11130d3a-be12-480c-bb0e-29b0558a9197/meta/preview_image.png?origin=viewer.cimmerce.com"
              className={styles.previewImage}
            />
          </div>
        </div>

        <ul className={styles.switcher}>
          {this.props.modelIds.map(modelId => {
            const isCurrent = modelId === this.state.currentModelId
            const src = isCurrent ? fullCircleSrc : emptyCircleSrc
            return (
              <li key={modelId}>
                <img src={src}
                  className={styles.switcherAnchor}
                  onClick={this.handleSwithcerAnchorClicked.bind(this, modelId)}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  configureViewer () {
    const self = this
    window.getCimmerseTenantConfig = () => {
      return {
        modelId: '11130d3a-be12-480c-bb0e-29b0558a9197',
        targetSelector: '#cimmerseViewerPlaceholder',
        trackingLabel: 'marketingFrontpage',
        visibleWhileLoading: true,
        placeholderStyles: `
        #CimmersePlaceholder {
          position: relative;
          width: 100%;
          height: 100%
      `,
      }
    }

    window.getCimmerseViewerConfig = () => {
      return {
        transparentMode: true,
        autorotateOverride: 1,
        onLoadCallback: self.handleModelLoaded,
        onUserInteractionCallback: self.handleUserInteraction
      }
    }
  }

  setNextModelTimer () {
    this.nextModelTimer = setTimeout(this.loadNextModel, this.displaySeconds * 1000)
  }

  clearNextModelTimer () {
    if(this.nextModelTimer) {
      clearTimeout(this.nextModelTimer)
      delete this.nextModelTimer
    }
  }

  handleModelLoaded() {
    if(this.carouselIsRunning) {
      this.setNextModelTimer()
    }
  }

  handleUserInteraction(event) {
    // 'toggle-menu' is automatically dispatched when switching model, so ignore for now
    if(this.carouselIsRunning && event !== 'toggle-menu') {
      this.clearNextModelTimer()

      if([
        'start-rotating',
        'start-zooming',
        'start-panning'
      ].indexOf(event) > -1) {
        this.setNextModelTimer()
      } else {
        this.carouselIsRunning = false
      }
    }
  }

  loadNextModel() {
    const currentIndex = this.props.modelIds.indexOf(this.state.currentModelId)
    const nextIndex = currentIndex === (this.props.modelIds.length - 1) ? 0 : currentIndex + 1

    const nextModelId = this.props.modelIds[nextIndex]
    this.showModel(nextModelId)
  }

  showModel(modelId) {
    this.setState({ currentModelId: modelId })
    window.Cimmerse.showModel(modelId)
  }

  handleSwithcerAnchorClicked(modelId) {
    this.carouselIsRunning = false
    this.clearNextModelTimer()
    this.showModel(modelId)
  }
}

ModelCarousel.propTypes = {
  modelIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  displaySeconds: PropTypes.number
}

export default ModelCarousel
