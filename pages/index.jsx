import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import LeadSection from '../components/LeadSection'

export default class Index extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} - ${config.siteDescription}`}
          meta={[{ name: 'description', content: config.siteDescription }]}
        />
        <LeadSection />
      </div>
    )
  }
}
