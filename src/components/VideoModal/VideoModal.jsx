import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  Modal, ModalBody
} from 'reactstrap'

import styles from './VideoModal.module.scss'

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

const VideoModal = ({ isOpen, onToggle }) => {
  if(!isOpen) { return null }

  return (
    <div className={cx(styles.lity, styles.lityOpened, styles.lityVimeo)} role="dialog" aria-label="Dialog Window (Press escape to close)" tabIndex="-1" aria-hidden="false">
      <div className={styles.lityWrap} data-lity-close="" role="document">
        <div className={styles.lityContainer}>
          <div className={styles.lityContent}>
            <div className={styles.lityIframeContainer}>
              <iframe frameBorder="0" allowFullScreen src="https://player.vimeo.com/video/236880208?color=ffffff&autoplay=1"></iframe>
            </div>
          </div>
          <button className={styles.lityClose} type="button" aria-label="Close (Press escape to close)" onClick={onToggle}>×</button>
        </div>
      </div>
    </div>
  )
}

VideoModal.propTypes = propTypes

export default VideoModal
