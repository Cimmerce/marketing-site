import React from 'react'
import cx from 'classnames'

import sectionStyles from '../../styles/base/section.scss'
import styles from './HowToUseItSection.scss'

const HowToUseItSection = () => {
  return (
    <section className={sectionStyles.section}>
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.headline}>
          How to use it
        </div>

        <div className={sectionStyles.list}>
          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              3D & VR catalog
            </div>
            <div className={sectionStyles.listItemBody}>
              A selection of your products digitized into 3D models on a page designed by you, but fully hosted and managed by us. Link to your 3D & VR catalog from anywhere with links back to your website to complete the purchase.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Webshop plugin
            </div>
            <div className={sectionStyles.listItemBody}>
              Complement or replace product photos with 3D models and VR in your existing webshop. We plug right into leading ecommerce platforms.
            </div>
          </div>

          <div className={cx(sectionStyles.listItem, styles.listItem)}>
            <div className={sectionStyles.listItemHeader}>
              Customized integration
            </div>
            <div className={sectionStyles.listItemBody}>
              We can help you integrate our 3D and VR solution into your custom-built ecommerce solution tailored specifically to your needs. We offer both light-weight client-side integration and deep, API-based server-side integration.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUseItSection