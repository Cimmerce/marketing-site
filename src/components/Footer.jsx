import React from 'react'
import logoSrc from '../assets/cimmerse_logo.svg'

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-12 col-lg-3">
          <p className="text-center text-lg-left">
            <a href="index.html"><img src={logoSrc} alt="logo" /></a>
          </p>
        </div>

        <div className="col-12 col-lg-6">
          <ul className="nav nav-primary nav-hero">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="block-feature.html">Features</a>
            </li>
            <li className="nav-item hidden-sm-down">
              <a className="nav-link" href="page-pricing.html">Pricing</a>
            </li>
            <li className="nav-item hidden-sm-down">
              <a className="nav-link" href="page-contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <div className="social text-center text-lg-right">
            <a className="social-facebook" href="https://www.facebook.com/thethemeio"><i className="fa fa-facebook"></i></a>
            <a className="social-twitter" href="https://twitter.com/thethemeio"><i className="fa fa-twitter"></i></a>
            <a className="social-instagram" href="https://www.instagram.com/thethemeio/"><i className="fa fa-instagram"></i></a>
            <a className="social-dribbble" href="https://dribbble.com/thethemeio"><i className="fa fa-dribbble"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
