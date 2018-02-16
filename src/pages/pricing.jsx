import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import GetStartedButton from '../components/GetStartedButton/GetStartedButton'
import styles from './pricing.module.scss'

const PricingPage = () => (
  <main className="main-content">

    <section className="section bg-gray">
      <Container className="">
        <h4 className="text-center">Subscription</h4>
        <br /><br />

        <Row className="gap-y text-center">
          <Col className="col-12 col-md-3">
            <div className="pricing-1">
              <p className="plan-name">Starter</p>
              <br />
              <h2 className={styles.pricingSize}>€200/month</h2>
              <br />
              <h6>Max SKUs: 10 </h6>
              <br />
            </div>
          </Col>

          <Col className="col-12 col-md-3">
            <div className="pricing-1">
              <p className="plan-name">Basic</p>
              <br />
              <h2 className={styles.pricingSize}>€500/month</h2>
              <br />
              <h6>Max SKUs: 100 </h6>
              <br />
            </div>
          </Col>

          <Col className="col-12 col-md-3">
            <div className="pricing-1">
              <p className="plan-name">Professional</p>
              <br />
              <h2 className={styles.pricingSize}>€2,000/month</h2>
              <br />
              <h6>Max SKUs: 500 </h6>
              <br />
            </div>
          </Col>

          <Col className="col-12 col-md-3">
            <div className="pricing-1">
              <p className="plan-name">Enterprise</p>
              <br />
              <h4 className={styles.pricingSize}>Custom Pricing</h4>
              <br />
              <h6>Max SKUs: Unlimited </h6>
              <br />
            </div>
          </Col>

        </Row>

      </Container>
    </section>

    <section className="section">
      <Container className="">
        <h4 className="text-center">3D Digitzations Per Sku Starting From</h4>
        <br /><br />

        <Row className="no-gutters pricing-4 popular" >
          <Col className="col-12 col-md-9 plan-description">
            <h5>3D scan </h5>
            <p>We should describe this so people understand what it means</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <h3>€60</h3>
          </Col>
        </Row>

        <br />

        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>3D from CAD model </h5>
            <p> We should describe this so people understand what it means</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <h3>€40</h3>
          </Col>
        </Row>

        <br />

        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>3D from Image</h5>
            <p>We should describe this so people understand what it means</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <h3>€20</h3>
          </Col>
        </Row>

        <br />

        <Row className="no-gutters pricing-4">
          <Col className="col-12 col-md-9 plan-description">
            <h5>Hand Built 3D</h5>
            <p>We should describe this so people understand what it means</p>
          </Col>

          <Col className="col-12 col-md-3 plan-price">
            <h3>€200</h3>
          </Col>
        </Row>
        <br />
        <Row className="no-gutters">
          <Col className="col-12 col-md-12">
            <p className="text-center py-3">
              <GetStartedButton />
            </p>
          </Col>

        </Row>

      </Container>
    </section>


  </main>
)

export default PricingPage
