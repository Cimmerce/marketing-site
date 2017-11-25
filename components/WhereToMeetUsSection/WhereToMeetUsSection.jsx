import React from 'react'
import cx from 'classnames'

import aweImage from './awe.png'
import bizBoostImage from './bizboost.png'
import cphPostImage from './cphpost.png'
import shoptalkImage from './shoptalk-europe.png'
import slushImage from './slush.png'

import sectionStyles from '../../styles/base/section.scss'
import styles from './WhereToMeetUsSection.scss'

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
              <a href="https://www.business.dk/vaekst/her-er-de-15-der-slap-gennem-elevator-testen-i-berlingske-business-boost" target="_new">
                <img src={bizBoostImage} width="250" />
              </a>

              <a href="http://cphpost.dk/news/goggle-me-up-scotty-this-is-the-final-frontier.html" target="_new">
                <img src={cphPostImage} width="120" height="120" />
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
              <div className={styles.confRole}>Speaker &amp; exhibitor</div>
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="https://www.youtube.com/watch?v=PfHRXll3B5Y" target="_new">
                <img src={aweImage} width="100" className={styles.confLogo} />
              </a>
              <div className={styles.confRole}>Speaker</div>
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              November 2017
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="http://www.slush.org/" target="_new">
                <img src={slushImage} width="120" className={styles.confLogo} />
              </a>
            </div>
            <div className={sectionStyles.listItemHeader}>
              <br /><br />
              March 2018
            </div>
            <div className={sectionStyles.listItemBody}>
              <a href="https://landingfestival.com/" target="_new">
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.confLogo} width="30" height="32" viewBox="0 0 30 32"><g fill-rule="nonzero"><path d="M0 0h4.37199955v15.4753633h8.08083065v3.9532081H0M16.4150943 0h13.018868v3.95320808h-8.7353957v3.95320808h8.0856555v3.95320804h-8.0856555v7.5689472h-4.2834723M0 28h30v4H0z"></path></g></svg>
              </a>
              <div className={styles.confRole}>Landing Festival</div>
              <div className={styles.confRole}>Speaker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhereToMeetUsSection