import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  Col, Row,
  Card, CardBody
} from 'reactstrap'

import styles from './ModelViewer.module.scss'

class ModelViewer extends Component {
  static propTypes = {
    modelIds: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      currentModelIndex: 0
    }
  }

  componentDidMount() {
    this.configureViewer()
  }

  render() {
    const modelId = this.props.modelIds[this.state.currentModelIndex]

    return (
      <Row className="gap-y">
        <Col className="col-12 col-md-8 col-lg-10">
          <div className={styles.container}>
            <div className={styles.modelViewer}>
              <div id="cimmerseViewerPlaceholder" className={styles.placeholder}>
                <img
                  src={this.getModelPreviewUrl(modelId)}
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-md-4 col-lg-2">
          <Row>
            {this.props.modelIds.map((modelId, index) => { return this.renderModelPreview(modelId, index) })}
          </Row>
        </Col>
      </Row>
    )
  }

  configureViewer () {
    const modelId = this.props.modelIds[this.state.currentModelIndex]

    window.getCimmerseTenantConfig = () => {
      return {
        modelId: modelId,
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

  renderModelPreview (modelId, index) {
    const isSelected = index === this.state.currentModelIndex

    return (
      <Col className="col-6 col-md-12 col-xl-12 p-0">
        <Card
          className={cx([
            'card-bordered',
            'm-2'
          ], {
            'card-hover-shadow': !isSelected,
            'border-secondary': isSelected,
            [styles.cardPreview]: !isSelected
          })}
          onClick={this.switchModel.bind(this, modelId, index)}
        >
          <CardBody className="text-center">
            <img
              src={this.getModelPreviewUrl(modelId)}
              className={styles.cardPreviewImage}
            />
          </CardBody>
        </Card>
      </Col>
    )
  }

  getModelPreviewUrl (modelId) {
    return `https://d31wrld7eatxzf.cloudfront.net/${modelId}/meta/preview_image.png`
  }

  switchModel (modelId, index) {
    this.setState({ currentModelIndex: index })
    window.Cimmerse.showModel(modelId)
  }
}

export default ModelViewer
