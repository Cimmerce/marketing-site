import React from 'react'

import LeadSection from '../components/LeadSection'
import ValuePropositionSection from '../components/ValuePropositionSection'
import HowItWorksSection from '../components/HowItWorksSection'
import HowToUseItSection from '../components/HowToUseItSection'
import HowWeAreDifferentSection from '../components/HowWeAreDifferentSection'
import OurStory from '../components/OurStory'
import WhereToMeetUsSection from '../components/WhereToMeetUsSection'
import FooterSection from '../components/FooterSection'

import styles from '../styles/index.scss'

const Index = () => {
//          <Helmet
//          title={`${config.siteTitle} - ${config.siteDescription}`}
//          meta={[{ name: 'description', content: config.siteDescription }]}
//        />
  return (
    <div>

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
