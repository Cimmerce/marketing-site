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
          '11130d3a-be12-480c-bb0e-29b0558a9197', // Gold chair
          'd6c87f85-e289-49c3-bd9b-cbd1a6d91328', // Handbag
          '8b1d41b3-220f-4ffc-811e-cb43c1b0b61a', // Egyptian head
          '1d2c1667-671d-437c-a13c-72a0414d11e0' // Chocolate cake
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
