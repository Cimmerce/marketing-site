import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap'

import logoSrc from '../../assets/cimmerse_logo.svg'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className="site-footer">
    <Container>
      <Row className="gap-y align-items-center">
        <Col className="col-12 col-lg-3">
          <p className="text-center text-lg-left">
            <a href="index.html"><img src={logoSrc} alt="logo" /></a>
          </p>
        </Col>

        <Col className="col-12 col-lg-8">
          <Nav className="nav-primary nav-hero">
            <NavItem><NavLink tag={Link} to='/contact'>Contact</NavLink></NavItem>
            <NavItem><a href="https://embed.cimmerse.com/v2/integration_guide.pdf" target="blank"> <NavLink>Documentation</NavLink></a></NavItem>
            <NavItem><NavLink tag={Link} to='/about'>About</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to='/privacy' className='hidden-sm-down'>Privacy policy</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to='/terms' className='hidden-sm-down'>Terms of use</NavLink></NavItem>
            <a className="social-twitter" href="https://twitter.com/cimmerse_com" target="blank">
              <i className={cx('ti ti-twitter', styles.twitterIcon)}></i>
            </a>
          </Nav>
        </Col>

      </Row>
    </Container>
  </footer>
)

export default Footer
