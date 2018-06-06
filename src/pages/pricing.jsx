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
                  See price list <i className="ti-angle-double-down"></i>
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
      <Element name="more"></Element>

      <header className="section-header">
        <small>Subscription</small>
        <h2>Risk-Free Trial</h2>
        <hr />
        <p className="lead">
          We provide cutting-edge technology and we understand the need to try the process and experience the difference it can make for your business before you make a larger commitment.
          We offer pilot projects starting at €100 so you can see for yourself.
        </p>
      </header>

      <Container>
        <Row className="gap-y text-center">
          <Col className="col-12 col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Pilot Project</p>
              <small>STARTING FROM</small>
              <h2 className={styles.pricingSize}>€100</h2>
              <br />
              <h6>One 3D scanned product</h6>
              <h6>3 months subscription included</h6>
              <h6>Unlimited support</h6>
              <br />
            </div>
          </Col>

          <Col className="col-12 col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Professional Subscription</p>
              <small>STARTING FROM</small>
              <h2 className={styles.pricingSize}>€200<small>/month</small></h2>
              <br />
              <h6>Scales with your business</h6>
              <h6>Pay monthly or yearly</h6>
              <h6>&nbsp;</h6>
              <br />
            </div>
          </Col>

          <Col className="col-12 col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Enterprise Subscription</p>
              <br />
              <GetStartedButton buttonText='Contact us' />
              <br /><div className="m-40"></div>
              <h6>Unlimited products</h6>
              <h6>Customized digitization process</h6>
              <h6>Customized integration</h6>
              <br />
            </div>
          </Col>

        </Row>

      </Container>
    </section>

    <section className="section">
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
        <Row className="no-gutters pricing-4 popular" >
          <Col className="col-12 col-md-9 plan-description">
            <h5>High quality 3D Scanning</h5>
            <p>Our highest quality option. We digitize your products in our studio or come to you.</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <small>STARTING FROM</small>
            <h3 className="pt-0 mb-0">€60</h3>
            <small>per product</small>
          </Col>
        </Row>

        <br />

        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>Your 3D files</h5>
            <p>We process your existing 3D models. CAD, FBX, DWG, OBJ and many more supported.</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <small>STARTING FROM</small>
            <h3 className="pt-0 mb-0">€40</h3>
            <small>per product</small>
          </Col>
        </Row>

        <br />

        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>3D from 2D images</h5>
            <p>Send us your product photos and we convert them to 3D.</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <small>STARTING FROM</small>
            <h3 className="pt-0 mb-0">€20</h3>
            <small>per product</small>
          </Col>
        </Row>

        <br />

        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>Custom built models</h5>
            <p>Our 3D artists help design and create high quality models.</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <small>STARTING FROM</small>
            <h3 className="pt-0 mb-0">€200</h3>
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
