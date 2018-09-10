import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import {
  Element, Link as ScrollLink
} from 'react-scroll'

import GetStartedButton from '../components/GetStartedButton/GetStartedButton'
import styles from './pricing.module.scss'

const PricingPage = () => (
  <main className="main-content">

    <section className="section pb-50">

      <Container>

        <Row>
          <Col className="col-12 text-center">
            <h1>Pricing</h1>
            <p className="fs-20 opacity-70">
              Cimmerse offers a full-service turnkey solution enabling your customers to experience your products in augmented reality in no time.
          </p>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-md-4">
            <div className="text-center">
              <p className="fs-60 fw-900 opacity-10">1</p>
              <h3 className="fw-300">Digitization</h3>
            </div>
            <ul>
              <li>We help you digitize your products into high quality 3D.</li>
              <li>We charge a fee per unique stock keeping unit we digitize.</li>
              <li>The fee depends on the digitization method and order size.</li>
              <li>
                <ScrollLink
                  href="#digitization"
                  to="digitization"
                  smooth={true} duration={500} offset={-100}
                >
                  See digitization options <i className="ti-angle-double-down"></i>
                </ScrollLink>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4">
            <div className="text-center">
              <p className="fs-60 fw-900 opacity-10">2</p>
              <h3 className="fw-300">Integration</h3>
            </div>
            <ul>
              <li>We put your products on the Cimmerse platform.</li>
              <li>You integrate the tech into your ecommerce solution with one line of code.</li>
              <li>We can customize the integration to your exact needs for a fee.</li>
              <li>
                <a href="https://embed.cimmerse.com/v2/integration_guide.pdf" target="blank">
                  Read the documentation <i className="ti-new-window"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4">
            <div className="text-center">
              <p className="fs-60 fw-900 opacity-10">3</p>
              <h3 className="fw-300">Subscription</h3>
            </div>
            <ul>
              <li>Your 3D products and AR/VR solution is hosted and maintained by us.</li>
              <li>We continuously add more features and support for new devices as they are released.</li>
              <li>We charge a monthly subscription fee scaling with the number of products you host with us.</li>
              <li>
                <ScrollLink
                  href="#more"
                  to="more"
                  smooth={true} duration={500} offset={-100}
                >
                  See price list <i className="ti-angle-double-down"></i>
                </ScrollLink>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </section>

    <section className="section bg-gray">
      <Element name="digitization"></Element>

      <header className="section-header">
        <small>Digitization</small>
        <h2>Bring your products into 3D, AR and VR</h2>
        <hr />
        <p className="lead">
          Whether you ship your products to one of our studios, we come to you with our mobile rig or you have existing 3D models to use a starting point; we have you covered.
        </p>
      </header>

      <Container className="">
        <Row className="gap-y text-center">
          <Col className="col-12 col-md-4">
            <div className="pricing-1">
              <p className="plan-name">High quality 3D Scanning</p>
              <p>Our highest quality option. We digitize your products in our studio or come to you.</p>
              <br />
            </div>
          </Col>

          <Col className="col-12 col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Your 3D files</p>
              <p>We process and optimize your existing 3D models. CAD, FBX, DWG, OBJ and many more supported.</p>
            </div>
          </Col>

          <Col className="col-12 col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Custom built models</p>
              <p>Our 3D artists help design and create high quality models.</p>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section">
      <Element name="more"></Element>

      <header className="section-header">
        <small>Subscription</small>
        <h2>Scales with the number of products</h2>
        <hr />
        <p className="lead">
          Test the waters with a few products or dive straight in with your full catalog.
          We have you covered with an affordable monthly subscription that scales with your business.
        </p>
      </header>

      <Container>
        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>Monthly subscription</h5>
            <p>We host all required assets and keep the Cimmerse platform up to date with the newest software and devices.</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <small>DOWN TO</small>
            <h3 className="pt-0 mb-0">€3</h3>
            <small>per product</small>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section">
      <header className="section-header">
        <p className="lead"> Increase conversion, reduce returns, sell more with AR today!</p>
        <Row className="gap-y align-items-center mt-20">
          <Col className="col-12 align-self-center text-center hidden-sm-down">
            <GetStartedButton />
          </Col>
        </Row>
      </header>
    </section>

  </main>
)

export default PricingPage
