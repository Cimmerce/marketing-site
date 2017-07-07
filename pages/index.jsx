import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import LeadSection from '../components/LeadSection'
import ValuePropositionSection from '../components/ValuePropositionSection'
import HowItWorksSection from '../components/HowItWorksSection'
import HowToUseItSection from '../components/HowToUseItSection'
import HowWeAreDifferentSection from '../components/HowWeAreDifferentSection'
import OurStory from '../components/OurStory'
import WhereToMeetUsSection from '../components/WhereToMeetUsSection'
import FooterSection from '../components/FooterSection'

import styles from '../styles/index.scss'

export default class Index extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} - ${config.siteDescription}`}
          meta={[{ name: 'description', content: config.siteDescription }]}
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
}
