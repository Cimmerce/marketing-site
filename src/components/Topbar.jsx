import React from 'react'
import logoSrc from '../assets/cimmerse_logo.svg'

const Topbar = () => (
  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
    <div className="container">

      <div className="topbar-left">
        <button className="topbar-toggler">&#9776;</button>
        <a className="topbar-brand" href="index.html">
          <img className="logo-default" src={logoSrc} alt="logo" />
          <img className="logo-inverse" src={logoSrc} alt="logo" />
        </a>
      </div>


      <div className="topbar-right">
        <ul className="topbar-nav nav">
          <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
          <li className="nav-item">
            <a className="nav-link" href="#">Samples <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu">
              <a className="nav-link" href="demo-helpato.html">Helpato</a>
              <a className="nav-link" href="demo-trello.html">Trello</a>
              <a className="nav-link" href="demo-gmail.html">Gmail</a>
              <a className="nav-link" href="demo-skype.html">Skype</a>
              <a className="nav-link" href="demo-github.html">GitHub</a>
              <a className="nav-link" href="demo-app.html">Mobile App</a>
              <a className="nav-link" href="demo-bootstrap.html">Bootstrap</a>
              <a className="nav-link" href="demo-slack.html">Slack</a>
              <a className="nav-link" href="demo-zendesk.html">Zendesk</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link active" href="#">Headers <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu">
              <a className="nav-link" href="header-color.html">Solid Color</a>
              <a className="nav-link" href="header-gradient.html">Gradient</a>
              <a className="nav-link" href="header-particle.html">Particle</a>
              <a className="nav-link" href="header-typing.html">Typing Text</a>
              <a className="nav-link" href="header-image.html">Background Image</a>
              <a className="nav-link active" href="header-video.html">Background Video</a>
              <a className="nav-link" href="header-parallax.html">Parallax</a>
              <a className="nav-link" href="header-slider.html">Slider</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Blocks <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu cols-2">
              <a className="nav-link" href="block-feature.html">Feature</a>
              <a className="nav-link" href="block-feature-textual.html">Textual feature</a>
              <a className="nav-link" href="block-content.html">Content</a>
              <a className="nav-link" href="block-portfolio.html">Portfolio</a>
              <a className="nav-link" href="block-pricing.html">Pricing</a>
              <a className="nav-link" href="block-cta.html">Call to action</a>
              <a className="nav-link" href="block-testimonial.html">Testimonial</a>
              <a className="nav-link" href="block-team.html">Team</a>
              <a className="nav-link" href="block-contact.html">Contact</a>
              <a className="nav-link" href="block-signup.html">Signup</a>
              <a className="nav-link" href="block-subscribe.html">Subscribe</a>
              <a className="nav-link" href="block-partner.html">Partner</a>
              <a className="nav-link" href="block-topbar.html">Topbar</a>
              <a className="nav-link" href="block-footer.html">Footer</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Blog <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu">
              <a className="nav-link" href="blog-classic.html">Layout classic</a>
              <a className="nav-link" href="blog-grid.html">Layout grid</a>
              <a className="nav-link" href="blog-list.html">Layout list</a>
              <a className="nav-link" href="blog-sidebar.html">Layout sidebar</a>
              <a className="nav-link" href="blog-single.html">Single post</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Shop <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu">
              <a className="nav-link" href="shop-list.html">Product list</a>
              <a className="nav-link" href="shop-single.html">Single product</a>
              <a className="nav-link" href="shop-cart.html">Cart overview</a>
              <a className="nav-link" href="shop-checkout.html">Checkout</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Pages <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu">
              <a className="nav-link" href="page-how-it-works.html">How it works</a>
              <a className="nav-link" href="page-pricing.html">Pricing</a>
              <a className="nav-link" href="page-portfolio.html">Portfolio</a>
              <a className="nav-link" href="page-project.html">Project</a>
              <a className="nav-link" href="page-job.html">Jobs</a>
              <a className="nav-link" href="page-job-single.html">Job Info</a>
              <a className="nav-link" href="page-demo.html">Request Demo</a>
              <a className="nav-link" href="page-press.html">Press</a>
              <a className="nav-link" href="page-about.html">About</a>
              <a className="nav-link" href="page-contact.html">Contact</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Extra <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu">
              <a className="nav-link" href="page-login.html">Login</a>
              <a className="nav-link" href="page-register.html">Register</a>
              <a className="nav-link" href="page-faq.html">FAQ</a>
              <a className="nav-link" href="page-coming-soon.html">Coming soon</a>
              <a className="nav-link" href="page-privacy.html">Privacy Policy</a>
              <a className="nav-link" href="page-404.html">Error 404</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Doc <i className="fa fa-caret-down"></i></a>
            <div className="nav-submenu align-right">
              <a className="nav-link" href="doc-element.html">Elements</a>
              <a className="nav-link" href="doc-component.html">Components</a>
              <a className="nav-link" href="doc-section.html">Sections</a>
              <a className="nav-link" href="doc-card.html">Cards</a>
              <a className="nav-link" href="doc-typography.html">Typography</a>
              <a className="nav-link" href="doc-utility.html">Utility Classes</a>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
)

export default Topbar
