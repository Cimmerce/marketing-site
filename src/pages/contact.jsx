import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import styles from './contact.module.scss'

const ContactPage = () => (
  <main className="main-content">
    <section className="section py-100">

      <Container className="">

        <Row className="text-center">
          <Col className="col-12 col-lg-8 offset-lg-2">

            <h1>Contact Us</h1>
            <p className="fs-20 opacity-70">We can't wait to hear from you</p>
          </Col>
        </Row>

        <Row className="gap-y mt-5">
          <Col className="col-12 col-md-6">
            <iframe
              className={styles.mapIframe}
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAZ221cPVqMaCcnUjzfe0VEBGepDuyLzHE
              &q=Hauser+Plads+16A,1127+Copenhagen+K,Denmark&zoom=13" allowfullscreen>
            </iframe>
          </Col>


          <Col className="col-12 col-md-5 offset-md-1">
            <div className="bg-grey h-full p-20">
              <p>We try to answer all enquiries within 24 hours.</p>

              <p className="lead">Cimmerse IVS <br />
                Hauser Plads 16A<br />1127 Copenhagen K<br />Denmark</p>

              <div>
                <span className="d-inline-block w-20 text-lighter" title="Email"><i className="ti-email"></i></span>
                <span className="fs-14"><a href="mailto:info@cimmerse.com">info@cimmerse.com</a></span>
              </div>

              <div>
                <span className="d-inline-block w-20 text-lighter" title="Phone"><i className="ti-mobile"></i></span>
                <span className="fs-14"><a href="tel:+45 42 61 78 50">+45 42 61 78 50</a></span>
              </div>

            </div>
          </Col>
        </Row>

      </Container>
    </section>
  </main>
)

export default ContactPage
