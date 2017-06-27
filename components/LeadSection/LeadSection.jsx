import React from 'react'
import cx from 'classnames'

import sectionStyles from '../../styles/base/section.scss'
import styles from './LeadSection.scss'

const LeadSection = () => {
  return (
    <section className={cx([sectionStyles.section, sectionStyles.contrastSection])}>
      <div className={styles.leadTextsContainer}>
        <div className={styles.bigLeadText}>
          3D and Virtual Reality for ecommerce
        </div>
        <div className={styles.subLeadText}>
          Cimmerce lets your business increase conversion and decrease returns
          with web-based 3D visualization and Virtual Reality that plugs right
          into your website.
        </div>
      </div>

      <div className={styles.modelsContainer}>
        Model goes here
      </div>

      <div className={styles.signupContainer}>
        Signup goes here
      </div>
    </section>
  )
}

export default LeadSection