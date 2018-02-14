import React from 'react'
import Link from 'gatsby-link'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap'

import logoSrc from '../../assets/cimmerse_logo.svg'

const Footer = () => (
  <footer className="site-footer">
    <Container>
      <Row className="gap-y align-items-center">
        <Col className="col-12 col-lg-3">
          <p className="text-center text-lg-left">
            <a href="index.html"><img src={logoSrc} alt="logo" /></a>
          </p>
        </Col>

        <Col className="col-12 col-lg-6">
          <Nav className="nav-primary nav-hero">
            <NavItem><NavLink tag={Link} to='/contact'>Contact</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to='/documentation'>Documentation</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to='/about'>About</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to='/privacy' className='hidden-sm-down'>Privacy policy</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to='/terms' className='hidden-sm-down'>Terms of use</NavLink></NavItem>
          </Nav>
        </Col>

        <div className="col-12 col-lg-3">
          <div className="social text-center text-lg-right">
            <a className="social-facebook" href="https://www.facebook.com/thethemeio"><i className="fa fa-facebook"></i></a>
            <a className="social-twitter" href="https://twitter.com/thethemeio"><i className="fa fa-twitter"></i></a>
            <a className="social-instagram" href="https://www.instagram.com/thethemeio/"><i className="fa fa-instagram"></i></a>
            <a className="social-dribbble" href="https://dribbble.com/thethemeio"><i className="fa fa-dribbble"></i></a>
          </div>
        </div>
      </Row>
    </Container>
  </footer>
)

export default Footer
