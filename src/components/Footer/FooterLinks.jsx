import React from 'react'
import Link from 'gatsby-link'
import {
  NavItem,
  NavLink,
} from 'reactstrap'

const FooterLinks = () => [
  <NavItem><NavLink tag={Link} to='/about'>About</NavLink></NavItem>,
  <NavItem><NavLink tag={Link} to='/contact'>Contact</NavLink></NavItem>,
  <NavItem><NavLink href="https://embed.cimmerse.com/v2/integration_guide.pdf" target="blank">Documentation</NavLink></NavItem>,
  <NavItem><NavLink tag={Link} to='/privacy' className='hidden-sm-down'>Privacy policy</NavLink></NavItem>,
  <NavItem><NavLink tag={Link} to='/terms' className='hidden-sm-down'>Terms of use</NavLink></NavItem>
]

export default FooterLinks
