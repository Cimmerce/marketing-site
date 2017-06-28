import React from 'react'
import cx from 'classnames'

import ModelViewer from '../ModelViewer'

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
        <ModelViewer modelId="8b1d41b3-220f-4ffc-811e-cb43c1b0b61a" />
      </div>

      <div className={styles.signupContainer}>
        <form className={styles.signupForm}>
          <input type='submit' value='Get access' className={styles.submitButton} />
          <span className={styles.emailFieldWrapper}>
            <input type='email' id='email' placeholder='Enter email' className={styles.emailField} />
          </span>
          <p className={styles.signupDescription}>Enter your email and we will contact you for beta access.</p>
        </form>
      </div>
    </section>
  )
}

export default LeadSection