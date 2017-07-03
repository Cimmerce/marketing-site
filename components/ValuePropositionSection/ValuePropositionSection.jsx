import React from 'react'
import cx from 'classnames'

import sectionStyles from '../../styles/base/section.scss'
import styles from './ValuePropositionSection.scss'

import lineChartIconSrc from './line-chart.svg'
import magicIconSrc from './magic.svg'
import rocketIconSrc from './rocket.svg'
import undoIconSrc from './undo.svg'

const ValuePropositionSection = () => {
  return (
    <section id="scrollTarget" className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          The time to get ahead is now
        </div>

        <div className={sectionStyles.list}>
          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={lineChartIconSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Conversion rate
            </div>
            <div className={sectionStyles.listItemBody}>
              Convert more browsers to buyers with beautiful product visualization.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={magicIconSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Experience
            </div>
            <div className={sectionStyles.listItemBody}>
              Delight your customers with a fresh experience in 3D & VR.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={rocketIconSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Competitive advantage
            </div>
            <div className={sectionStyles.listItemBody}>
              Differentiate yourself from competitors by being ahead of the curve.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <img src={undoIconSrc} className={sectionStyles.listIcon} />
            <div className={sectionStyles.listItemHeader}>
              Fewer returns
            </div>
            <div className={sectionStyles.listItemBody}>
               Improve your return rate by letting customers see all details before they buy.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropositionSection