import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ModelViewer from '../ModelViewer'
import styles from './ModelCarousel.scss'

class ModelCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentModelId: props.modelIds[0],
      renderedModelIds: [props.modelIds[0]]
    }

    this.displaySeconds = props.displaySeconds || 10

    this.bindMethods()
  }

  bindMethods() {
    this.handleModelLoaded = this.handleModelLoaded.bind(this)
    this.loadNextModel = this.loadNextModel.bind(this)
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.renderedModelIds.map(modelId => {
          return (
            <div className={cx({
                [styles.modelViewer]: true,
                [styles.currentlyShownModel]: (modelId === this.state.currentModelId)
              })}
              key={modelId}
            >
              <ModelViewer
                modelId={modelId}
                onLoad={this.handleModelLoaded.bind(this, modelId)}
              />
            </div>
           )
          }
        )}
      </div>
    )
  }

  handleModelLoaded(modelId) {
    this.setState({ currentModelId: modelId })
    setTimeout(this.loadNextModel, this.displaySeconds * 1000)
  }

  loadNextModel() {
    const currentIndex = this.props.modelIds.indexOf(this.state.currentModelId)
    const nextIndex = currentIndex === (this.props.modelIds.length - 1) ? 0 : currentIndex + 1

    const nextModelId = this.props.modelIds[nextIndex]
    const renderedModelIds = this.state.renderedModelIds
    if(renderedModelIds.indexOf(nextModelId) === -1) {
      renderedModelIds.push(nextModelId)
      this.setState({ renderedModelIds })
    } else {
      this.handleModelLoaded(nextModelId)
    }
  }
}

ModelCarousel.propTypes = {
  modelIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  displaySeconds: PropTypes.number
}

export default ModelCarousel