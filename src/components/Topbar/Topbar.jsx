import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Link from 'gatsby-link'
import {
  Button,
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { withRouter } from 'react-router'

import logoSrc from '../../assets/cimmerse_logo.svg'
import logoLightSrc from '../../assets/cimmerse_logo_light.svg'
import styles from './Topbar.module.scss'
import RequestQuote from '../RequestQuote/RequestQuote';

class Topbar extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.bindMethods()

    this.state = {
      isTopbarRevealed: false,
      isRequestQuoteModalOpen: false
    }
  }

  bindMethods () {
    this.handleScroll = this.handleScroll.bind(this)
    this.handleTogglerClick = this.handleTogglerClick.bind(this)
    this.handleBackdropClick = this.handleBackdropClick.bind(this)
    this.handleRequestQuoteModalToggled = this.handleRequestQuoteModalToggled.bind(this)
    this.handleRouteChanged = this.handleRouteChanged.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.removeHistoryEventListener = this.props.history.listen(this.handleRouteChanged)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    this.removeHistoryEventListener()
  }

  render () {
    const navClasses = cx([
      'topbar', 'topbar-expand-md', 'topbar-sticky',
      { 'topbar-inverse': this.props.location.pathname === '/' }
    ])

    return (
      <div>
        <nav className={navClasses}>
          {
            this.state.isTopbarRevealed &&
              <div className="topbar-backdrop" onClick={this.handleBackdropClick}></div>
          }
          <Container>

            <div className="topbar-left">
              <button className="topbar-toggler" onClick={this.handleTogglerClick}>&#9776;</button>
              <NavLink tag={Link} to='/' className="topbar-brand">
                <img className="logo-default" src={logoSrc} alt="logo" />
                <img className="logo-inverse" src={logoLightSrc} alt="logo" />
              </NavLink>
            </div>


            <div className="topbar-right">
              <Nav className="topbar-nav">
                <NavItem><NavLink tag={Link} to='/'>Home</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to='/product'>Product</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to='/pricing'>Pricing</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to='/cases'>Cases</NavLink></NavItem>
                <NavItem>
                  <Button
                    id="getStartedButton"
                    color='primary'
                    className={styles.getStartedButton}
                    onClick={this.handleRequestQuoteModalToggled}
                  >Get started</Button>
                </NavItem>
              </Nav>
            </div>

          </Container>
        </nav>

        <RequestQuote
          isOpen={this.state.isRequestQuoteModalOpen}
          onToggle={this.handleRequestQuoteModalToggled}
        />
      </div>
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

  hideTopbar () {
    const body = document.body
    if ( !body || !body.classList ) { return }

    body.classList.remove('topbar-reveal')
    this.setState({ isTopbarRevealed: false })
  }

  handleTogglerClick () {
    const body = document.body
    if ( !body || !body.classList ) { return }

    body.classList.toggle('topbar-reveal')
    const isTopbarRevealed = body.classList.contains('topbar-reveal')
    this.setState({ isTopbarRevealed })
  }

  handleBackdropClick () {
    this.hideTopbar()
  }

  handleRequestQuoteModalToggled () {
    this.setState({ isRequestQuoteModalOpen: !this.state.isRequestQuoteModalOpen })
  }

  handleRouteChanged(_location, _action) {
    this.hideTopbar()
  }
}

export default withRouter(Topbar)
