import React from 'react'
import Helmet from 'react-helmet'

import ModelViewer from '../components/ModelViewer'
import backgroundImage from '../images/pages/heitch-gallery-example-background.png'
import styles from '../styles/pages/heitch-gallery-example.module.scss'

const HeitchGalleryExample = () => {
  return (
    <div className={styles.main}>
      <Helmet
        title="Heitch Gallery example"
      />

      <div className={styles.wrapper}>
        <img src={backgroundImage} width="957" height="894" className={styles.backgroundImage} />
        <div className={styles.modelContainer}>
          <ModelViewer modelId="b336def9-1eba-4c13-9a92-7195569f5563" />
        </div>
      </div>
    </div>
  )
}

export default HeitchGalleryExample
