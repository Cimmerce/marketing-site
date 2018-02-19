import React from 'react'
import Link from 'gatsby-link'
import {
  NavItem,
  NavLink,
} from 'reactstrap'

const FooterLinks = () => [
  <NavItem key="contact"><NavLink tag={Link} to='/contact'>Contact</NavLink></NavItem>,
  <NavItem key="docs"><NavLink href="https://embed.cimmerse.com/v2/integration_guide.pdf" target="blank">Documentation</NavLink></NavItem>,
  <NavItem key="privacy"><NavLink tag={Link} to='/privacy' className='hidden-sm-down'>Privacy policy</NavLink></NavItem>,
  <NavItem key="terms"><NavLink tag={Link} to='/terms' className='hidden-sm-down'>Terms of use</NavLink></NavItem>
]

export default FooterLinks
