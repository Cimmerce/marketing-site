import React, { Component } from 'react'
import cx from 'classnames'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import { config } from 'config'
import sectionStyles from '../styles/base/section.scss'
import styles from '../styles/index.scss'

export default class Index extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} - ${config.siteDescription}`}
          meta={[{ name: 'description', content: config.siteDescription }]}
        />

        <section className={cx([sectionStyles.section, sectionStyles.contrastSection])}>
          <div className={styles.leadTexts}>
            <div className={styles.bigLeadText}>
              3D and Virtual Reality for ecommerce
            </div>
            <div className={styles.subLeadText}>
              Cimmerce lets your business increase conversion and decrease returns
              with web-based 3D visualization and Virtual Reality that plugs right
              into your website.
            </div>
          </div>
        </section>
      </div>
    )
  }
}
