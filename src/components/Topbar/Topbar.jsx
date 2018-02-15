import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Button,
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import logoSrc from '../../assets/cimmerse_logo.svg'
import styles from './Topbar.module.scss'

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <Container>

          <div className="topbar-left">
            <button className="topbar-toggler">&#9776;</button>
            <a className="topbar-brand" href="index.html">
              <img className="logo-default" src={logoSrc} alt="logo" />
              <img className="logo-inverse" src={logoSrc} alt="logo" />
            </a>
          </div>


          <div className="topbar-right">
            <Nav className="topbar-nav">
              <NavItem><NavLink tag={Link} to='/'>Home</NavLink></NavItem>
              <NavItem><NavLink tag={Link} to='/features'>Features</NavLink></NavItem>
              <NavItem><NavLink tag={Link} to='/pricing'>Pricing</NavLink></NavItem>
              <NavItem><NavLink tag={Link} to='/cases'>Cases</NavLink></NavItem>
              <NavItem><Button color='primary' className={styles.getStartedButton}>Get started</Button></NavItem>
            </Nav>
          </div>

        </Container>
      </nav>
    )
  }

  handleScroll () {
    const body = document.body
    if ( !body || !body.classList ) { return }

    const currentScroll = this.getScrollTop()
    if(currentScroll > 10) {
      body.classList.add('body-scrolled')
    } else {
      body.classList.remove('body-scrolled')
    }
  }

  getScrollTop () {
    return window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0
  }
}

export default Topbar
