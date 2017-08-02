import React from 'react'

import sectionStyles from '../../styles/base/section.scss'
import styles from './VideoSection.scss'

const VideoSection = () => {
  return (
    <section id="scrollTarget" className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          Discover Cimmerse in 1 minute
        </div>
        <div>
          <iframe
            className={styles.embedFrame}
            src="https://player.vimeo.com/video/228062724?color=ffffff"
            width="640" height="360"
            frameBorder="0" allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
