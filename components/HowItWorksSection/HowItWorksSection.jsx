import React from 'react'
import cx from 'classnames'

import desktopImageSrc from './desktop.svg'
import laptopImageSrc from './laptop.svg'
import mobileImageSrc from './mobile.svg'
import snowflakeImageSrc from './snowflake-o.svg'
import tabletImageSrc from './tablet.svg'

import cardboardImageSrc from './cardboard.png'
import daydreamImageSrc from './daydream.png'
import oculusImageSrc from './oculus.png'
import viveImageSrc from './vive.png'

import sectionStyles from '../../styles/base/section.scss'
import styles from './HowItWorksSection.scss'

const HowItWorksSection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          How it works
        </div>

        <div className={sectionStyles.list}>
          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Photorealistic 3D scans
            </div>
            <div className={sectionStyles.listItemBody}>
              We help you digitize your products into highly realistic, true 3D models.
            </div>
            <img src={snowflakeImageSrc} className={styles.centerIcon} />
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              3D on any device
            </div>
            <div className={sectionStyles.listItemBody}>
              We provide the platform that lets your customers see your products in 3D on any device with a web browser.
            </div>
            <img src={laptopImageSrc} className={sectionStyles.bottomIcon} />
            <img src={mobileImageSrc} className={sectionStyles.bottomIcon} />
            <img src={tabletImageSrc} className={sectionStyles.bottomIcon} />
            <img src={desktopImageSrc} className={sectionStyles.bottomIcon} />
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Virtual Reality support
            </div>
            <div className={sectionStyles.listItemBody}>
              Our platform can give your customers a brand new and completely immersive experience exploring your products in virtual reality.
            </div>
            <img src={cardboardImageSrc} className={sectionStyles.bottomIcon} />
            <img src={daydreamImageSrc} className={sectionStyles.bottomIcon} />
            <img src={oculusImageSrc} className={sectionStyles.bottomIcon} />
            <img src={viveImageSrc} className={sectionStyles.bottomIcon} />

          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection