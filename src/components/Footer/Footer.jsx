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

import FooterLinks from './FooterLinks'
import logoSrc from '../../assets/cimmerse_logo.svg'
import thinkLogoSrc from './think_logo.png'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className="site-footer">
    <Container>
      <Row className="gap-y align-items-center">
        <Col className="col-12 col-md-3 text-center">
          <NavLink tag={Link} to='/'><img src={logoSrc} alt="Cimmerse logo" className={styles.cimmerseLogo} /></NavLink>
        </Col>

        <Col className="col-12 col-md-8">
          <Nav className="nav-primary nav-hero d-none d-lg-flex">
            <FooterLinks />
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
