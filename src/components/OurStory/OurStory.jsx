import React from 'react'
import cx from 'classnames'

import sectionStyles from '../../styles/base/section.scss'
import styles from './OurStory.scss'

const OurStory = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          Our story
        </div>
        <div className={cx(sectionStyles.listItemBody, styles.bodyText)}>
          <p>The Web is one of the most significant inventions to modern humans and ushered in the Information Age. Since it’s inception the user interface has been 2D, until now.</p>
          <p>We are now entering the next paradigm shift with volumetric computing. A 3D mixed reality interface available in real time wherever the web is accessible. With new satellite Internet technologies and current infrastructure making it omnipresent.</p>
          <p>Cimmerce is using its vision and expertise to realize the no barrier, democratization, of knowledge, industry and ubiquitous real time computing.</p>
        </div>
      </div>
    </section>
  )
}

export default OurStory