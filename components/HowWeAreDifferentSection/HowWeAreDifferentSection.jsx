import React from 'react'
import cx from 'classnames'

import sectionStyles from '../../styles/base/section.scss'
import styles from './HowWeAreDifferentSection.scss'

const HowWeAreDifferentSection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          How we are different
        </div>

        <div className={sectionStyles.list}>
          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              True 3D models
            </div>
            <div className={sectionStyles.listItemBody}>
              Other visualization solutions that claim to offer a "360 degree" view usually features a simple series of photos that offers 180 degree rotation without the ability to zoom or handle freely.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Web-based Virtual Reality
            </div>
            <div className={sectionStyles.listItemBody}>
              Almost any other VR solution requires the customer to download an app to their device. This is a major obstacle to conversion, and one our instantly available web-based VR solution completely eliminates.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Highest degree of realism
            </div>
            <div className={sectionStyles.listItemBody}>
              We are experts in photogrammetry and 3D digitizations. We don’t settle for computer-generated visuals. Our 3D models are so realistic people reach out to touch them.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Buy from Virtual Reality
            </div>
            <div className={sectionStyles.listItemBody}>
              Your customer can initiate and complete the checkout flow without ever leaving Virtual Reality.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeAreDifferentSection