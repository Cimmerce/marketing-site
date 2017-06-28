import React from 'react'

import ModelViewer from '../ModelViewer'

import sectionStyles from '../../styles/base/section.scss'

const HowItWorksSection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          How it works
        </div>

        <div className={sectionStyles.list}>
          <div className={sectionStyles.listItem}>
            <div className={sectionStyles.listItemHeader}>
              Photorealistic 3D scans
            </div>
            <div className={sectionStyles.listItemBody}>
              We help you digitize your products into highly realistic, true 3D models.
            </div>
          </div>

          <div className={sectionStyles.listItem}>
            <div className={sectionStyles.listItemHeader}>
              3D on any device
            </div>
            <div className={sectionStyles.listItemBody}>
              We provide the platform that lets your customers see your products in 3D on any device with a web browser.
            </div>
          </div>

          <div className={sectionStyles.listItem}>
            <div className={sectionStyles.listItemHeader}>
              Virtual Reality support
            </div>
            <div className={sectionStyles.listItemBody}>
              Our platform can give your customers a brand new and completely immersive experience exploring your products in virtual reality.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection