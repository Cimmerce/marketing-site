import React from 'react'
import cx from 'classnames'

import cphPostImage from './cphpost.png'
import copenxImage from './copenx.png'
import shoptalkImage from './shoptalk-europe.png'
import techBBQImage from './techbbq.png'

import sectionStyles from '../../styles/base/section.module.scss'
import styles from './WhereToMeetUssection.module.scss'

const WhereToMeetUsSection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          Where to meet us
        </div>

        <div className={sectionStyles.list}>
          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              In the press
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="http://cphpost.dk/news/goggle-me-up-scotty-this-is-the-final-frontier.html" target="_new">
                <img src={cphPostImage} width="150" height="150" />
              </a>
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              September 2017
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="https://www.techbbq.dk/" target="_new">
                <img src={techBBQImage} width="120" className={styles.confLogo} />
              </a>

              <a href="http://copenx.com/" target="_new">
                <img src={copenxImage} width="200" className={styles.confLogo} />
              </a>
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              October 2017
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="https://shoptalkeurope.com/" target="_new">
                <img src={shoptalkImage} width="150" className={styles.confLogo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhereToMeetUsSection