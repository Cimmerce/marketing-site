import React from 'react'
import cx from 'classnames'
import jump from 'jump.js'

import ModelCarousel from '../ModelCarousel'
import Email from '../Email'

import downArrowSrc from './angle-down.svg'
import logoImageSrc from './logo.png'
import sectionStyles from '../../styles/base/section.scss'
import styles from './LeadSection.scss'

const LeadSection = () => {
  return (
    <section className={cx([sectionStyles.section, sectionStyles.contrastSection, styles.fullHeightSection])}>
      <img width="200" src={logoImageSrc} className={styles.logo} />
      <div className={styles.leadTextsContainer}>
        <div className={styles.bigLeadText}>
          Engage the immersive web!
        </div>
        <div className={styles.subLeadText}>
          Cimmerse lets your business increase conversion and decrease returns
          with web-based 3D visualization and Virtual Reality that plugs right
          into your website.
        </div>
      </div>

      <div className={styles.modelsContainer}>
        <ModelCarousel modelIds={[
          '739ac44f-0252-4ab2-9412-ba54996e0fea', // Gold chair
          'bc64bb49-a8a6-4b28-a702-bb4238d418e7', // Handbag
          '8b1d41b3-220f-4ffc-811e-cb43c1b0b61a', // Egyptian head
          '93162bc5-d1ce-47d1-8cf1-3dba883b9286' // White cake
        ]} />
      </div>

      <div className={styles.signupContainer}>
        <Email />
      </div>

      <img
        src={downArrowSrc}
        className={styles.downArrow}
        onClick={jump.bind(undefined, '#scrollTarget')}
      />
    </section>
  )
}

export default LeadSection
