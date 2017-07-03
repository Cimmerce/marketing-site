import React from 'react'
import cx from 'classnames'

import Email from '../Email'

import sectionStyles from '../../styles/base/section.scss'
import styles from './FooterSection.scss'

const FooterSection = () => {
  return (
    <section className={cx([sectionStyles.section, sectionStyles.contrastSection])}>
      <div className={styles.headline}>
        You need to see this! Let us show you.
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.emailContainer}>
          <Email />
        </div>

        <div className={styles.contactContainer}>
          <p>
            Cimmerce IVS<br />
            Hauser Plads 16A<br />
            1127 Copenhagen K<br />
            Denmark
          </p>
          <p>
            <a href="mailto:info@cimmerse.com" className={styles.emailLink}>
              info@cimmerse.com
            </a>
          </p>
        </div>
      </div>
    </section>

  )
}

export default FooterSection