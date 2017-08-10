import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import fullCircleSrc from './circle.svg'
import emptyCircleSrc from './circle-o.svg'

import ModelViewer from '../ModelViewer'
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

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.modelViewer}>
          <ModelViewer
            key={this.state.currentModelId}
            modelId={this.state.currentModelId}
            autorotate={1}
            onLoad={this.handleModelLoaded}
            onUserInteraction={this.handleUserInteraction}
          />
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
    if(this.carouselIsRunning) {
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