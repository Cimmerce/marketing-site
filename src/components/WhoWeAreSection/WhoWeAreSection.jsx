import React from 'react'
import cx from 'classnames'

import sectionStyles from '../../styles/base/section.module.scss'
import styles from './WhoWeAresection.module.scss'

import ericImgSrc from './eric.jpg'
import casperImgSrc from './casper.jpg'

const WhoWeAreSection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          Who we are
        </div>

        <div className={sectionStyles.list}>
          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={ericImgSrc} className={styles.portrait} />
            <div className={sectionStyles.listItemHeader}>
              Eric Prince
            </div>
            <div className={styles.title}>
              Co-founder &amp; CEO
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="mailto:eric@cimmerse.com">eric@cimmerse.com</a><br />
              <a href="tel:+4542617850">+45 4261 7850</a><br />
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={casperImgSrc} className={styles.portrait} />
            <div className={sectionStyles.listItemHeader}>
              Casper Fabricius
            </div>
            <div className={styles.title}>
              Co-founder &amp; CTO
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="mailto:eric@cimmerse.com">casper@cimmerse.com</a><br />
              <a href="tel:+4540508409">+45 4050 8409</a><br />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhoWeAreSection