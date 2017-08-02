import React from 'react'
import cx from 'classnames'

import cartImageSrc from './cart-arrow-down.svg'
import cloudImageSrc from './cloud.svg'
import chromeImageSrc from './chrome.svg'
import diamondImageSrc from './diamond.svg'
import edgeImageSrc from './edge.svg'
import eyeImageSrc from './eye.svg'
import firefoxImageSrc from './firefox.svg'
import safariImageSrc from './safari.svg'

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
            <img src={cloudImageSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Web-based Virtual Reality
            </div>
            <div className={sectionStyles.listItemBody}>
              Downloading an app is a major obstacle to conversion. Our instantly available web-based VR solution runs directly in the browser.
            </div>
            <img src={chromeImageSrc} className={sectionStyles.bottomIcon} />
            <img src={firefoxImageSrc} className={sectionStyles.bottomIcon} />
            <img src={edgeImageSrc} className={sectionStyles.bottomIcon} />
            <img src={safariImageSrc} className={sectionStyles.bottomIcon} />
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={diamondImageSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Highest degree of realism
            </div>
            <div className={sectionStyles.listItemBody}>
              We are experts in photogrammetry and 3D digitizations. We don’t settle for computer-generated visuals. Our 3D models are so realistic people reach out to touch them.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={eyeImageSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Analytics
            </div>
            <div className={sectionStyles.listItemBody}>
              We collect valuable information about customer behaviour in 3D and VR and make it available to you.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={cartImageSrc} className={sectionStyles.listIcon} />
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