import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import styles from './index.module.scss'


const FeaturesPage = () => (
  <main className="main-content">
    <section className="section py-100">

      <Container className="text-center">

        <Row className="">
          <Col className="col-12 col-lg-8 offset-lg-2">

            <h1>Our Product</h1>
            <p className="fs-20 opacity-70">Our platform helps reatailers sell more using the latest in Augemented and Virtual Reality technology</p>
          </Col>
        </Row>

      </Container>
    </section>

    <section className="section">
      <Container className="">

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 text-center hidden-sm-down">
            <img src="assets/img/demo/slack/tools.png" alt="..." />
          </Col>

          <Col className="col-12 col-md-5 offset-md-1 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">01</p>
            <h3 className="fw-300">Digitization</h3>
            <ul>
              <li>Rig</li>
              <li>Hand Tailered</li>
              <li>3D from Images</li>
            </ul>
            <p>(For the image, perhaps an image of our rig or something else to represent digitization)</p>
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-5 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">02</p>
            <h3 className="fw-300">3D</h3>
            <p>Embedd a 3D model on your website with only one line of code (for the image, we should have an example of an emmbeded model)</p>
          </Col>

          <Col className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
            <img src="assets/img/demo/slack/drag.png" alt="..." />
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 text-center hidden-sm-down">
            <img src="assets/img/demo/slack/everywhere.png" alt="..." />
          </Col>

          <Col className="col-12 col-md-5 offset-md-1 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">03</p>
            <h3 className="fw-300">VR</h3>
            <p>If you have a headset (Rift, Vive, GearVR, Cardboard), view your models in a VR store room (reword)</p>
            <p>(For the image, should it a picture of a headset, or icons of all the headsets, or someone using VR?) </p>
          </Col>
        </Row>

        <Row className="gap-y align-items-center">
          <Col className="col-12 col-md-5 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">04</p>
            <h3 className="fw-300">AR</h3>
            <p>Our breakthrough product allows anyone to view your product in AR <strong> straight through the browser</strong>.
            <br />
              No installs, no expensive headsets, and no 3rd party platforms.
            </p>
            <p>(I'm not sure how to represent AR with an image. Should it be a picture of our AR tool or a common
          AR icon/image that people will instantly recognize?) </p>
          </Col>

          <Col className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
            <img src="assets/img/demo/slack/cta.png" alt="..." />
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 text-center hidden-sm-down">
            <img src="assets/img/demo/slack/everywhere.png" alt="..." />
          </Col>

          <Col className="col-12 col-md-5 offset-md-1 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">05</p>
            <h3 className="fw-300">Analytics</h3>
            <p>We collect user data and provide valuable insights back to you to help you convert your visitors to customers.</p>
            <p> (probably a chart/graph for the image or something else that seems "analtyicly")</p>
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 align-self-center text-center hidden-sm-down">
            <button className="btn btn-small btn-primary">
              <a className={styles.getStarted} href="#">Get started</a>
            </button>
          </Col>
        </Row>

      </Container>
    </section>

    <section className="section pb-0 overflow-hidden">
      <Container className="">
        <header className="section-header">
          <h2>We work with all types of business</h2>
          <hr />
          <p className="lead"> Here are just a few examples of products and companies we've worked with in the past</p>
          <p> (For images, we can use the icons from the Cimmerse deck) </p>
        </header>

        <Row className="row gap-y text-center">
          <Col className="col-md-4 d-flex flex-column">
            <div className="mb-60">
              <p className="text-info fs-50 mb-0">Fashion</p>
              <p>Shoes, accessories, jewlery, clothing</p>
            </div>
            <div className="px-20 mt-auto">
              <img className="shadow-4 opacity-80" src="assets/img/header-color.jpg" alt="..." data-aos="slide-up" data-aos-delay="300" />
            </div>
          </Col>

          <Col className="col-md-4 d-flex flex-column">
            <div className="mb-7">
              <p className="text-info fs-50 mb-0">Interior</p>
              <p>Furniture, lamps, home decorations</p>
            </div>
            <div className="mt-auto">
              <img className="shadow-6" src="assets/img/header-gradient.jpg" alt="..." data-aos="slide-up" />
            </div>
          </Col>

          <Col className="col-md-4 d-flex flex-column">
            <div className="mb-7">
              <p className="text-info fs-50 mb-0">Art</p>
              <p>Galleries, auction houses, museums</p>
            </div>
            <div className="px-20 mt-auto">
              <img className="shadow-4 opacity-80" src="assets/img/header-typing.jpg" alt="..." data-aos="slide-up" data-aos-delay="600" />
            </div>
          </Col>

        </Row>

      </Container>
    </section>

  </main>
)

export default FeaturesPage
