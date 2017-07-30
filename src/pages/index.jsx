import React from 'react'
import Helmet from 'react-helmet'

import LeadSection from '../components/LeadSection'
import ValuePropositionSection from '../components/ValuePropositionSection'
import HowItWorksSection from '../components/HowItWorksSection'
import HowToUseItSection from '../components/HowToUseItSection'
import HowWeAreDifferentSection from '../components/HowWeAreDifferentSection'
import OurStory from '../components/OurStory'
import WhereToMeetUsSection from '../components/WhereToMeetUsSection'
import FooterSection from '../components/FooterSection'

require('typeface-montserrat')
require('typeface-roboto-condensed')
import styles from '../styles/index.scss'

const Index = () => {
  return (
    <div>
      <Helmet
        title="Cimmerse - 3D and Virtual Reality for ecommerce"
        meta={[{ name: 'description', content: "3D and Virtual Reality for ecommerce" }]}
      />

      <LeadSection />

      <ValuePropositionSection />
      <hr className={styles.separator} />

      <HowItWorksSection />
      <hr className={styles.separator} />

      <HowWeAreDifferentSection />
      <hr className={styles.separator} />

      <HowToUseItSection />
      <hr className={styles.separator} />

      <OurStory />
      <hr className={styles.separator} />

      <WhereToMeetUsSection />

      <FooterSection />
    </div>
  )
}

export default Index
