import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import GetStartedButton from '../components/GetStartedButton/GetStartedButton'
import styles from './product.module.scss'

import digitizationPicSrc from '../assets/images/digitize1.jpg'
import embedPicSrc from '../assets/images/embedsample.jpg'
import vrPicSrc from '../assets/images/VR_graphic.png'
import arPicSrc from '../assets/images/ar_graphic.jpg'
import fashionPicSrc from '../assets/images/lvbag.png'
import artPicSrc from '../assets/images/art.png'
import interiorPicSrc from '../assets/images/chair.png'
import analyticsPicSrc from '../assets/images/analytics1.png'
import CimmersePlatformPicSrc from '../assets/images/product_process.jpg'

const ProductPage = () => (
  <main className="main-content">
    <section className="section">
      <Container>

        <Row className="text-center mb-50">
          <Col className="col-12 col-lg-8 offset-lg-2">

            <h1>Product</h1>
            <p className="fs-20 opacity-70">Our platform helps retailers sell more using the latest in Augmented and Virtual Reality technology</p>
          </Col>
        </Row>
        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 text-center hidden-sm-down">
            <img src={digitizationPicSrc} alt="..." />
          </Col>

          <Col className="col-12 col-md-5 offset-md-1 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">01</p>
            <h3 className="fw-300">Digitization: We create your products into highly realistic 3D </h3>
            <ul>
              <li>High quality 3D Scanning: We digitize your products in our studio or come to you.</li>
              <li>Your 3D files: We process your existing 3D models. CAD, FBX, DWG, OBJ and many more supported.</li>
              <li>3D from 2D images: Send us your product photos and we convert them to 3D.</li>
              <li>Custom built models: Our 3D artists help design and create high quality models.</li>
            </ul>
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down order-md-12">
            <img src={CimmersePlatformPicSrc} alt="..." />
          </Col>
          <Col className="col-12 col-md-5 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">02</p>
            <h3 className="fw-300">Cimmerse Platform</h3>
            <ul>
              <li>Upload, light and stage your 3D models. </li>
              <li>Customize information about your products and features for easy usability.
              All the information your customer needs to make a decision to purchase at their fingertips.  </li>
              <li>One of the first VR/AR check out that ties into your existing payment solution. </li>
            </ul>
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 text-center hidden-sm-down">
            <img src={vrPicSrc} alt="..." />
          </Col>

          <Col className="col-12 col-md-5 offset-md-1 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">03</p>
            <h3 className="fw-300">VR</h3>
            <p>Headsets (HMD) supported in VR (Rift, Vive, GearVR and Daydream.)</p>
            <ul>
              <li>The VR Experience from anywhere your customer chooses to be. </li>
              <li>Make available all of your inventory in your retail store without having the actual items on the showroom floor. </li>
            </ul>
          </Col>
        </Row>

        <Row className="gap-y align-items-center">
          <Col className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down order-md-12">
            <img src={arPicSrc} alt="..." />
          </Col>
          <Col className="col-12 col-md-5 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">04</p>
            <h3 className="fw-300">AR</h3>
            <p>View your products in AR straight through the browser. </p>
            <ul>
              <li>No Apps or installs. </li>
              <li>This allows customers to browser your products and place them right in the room with them instantly. </li>
              <li>All mobile devices supported (IOS, Android,...)</li>
            </ul>
          </Col>
        </Row>

        <Row className="gap-y align-items-center mb-90">
          <Col className="col-12 col-md-6 text-center hidden-sm-down">
            <img src={analyticsPicSrc} alt="..." />
          </Col>

          <Col className="col-12 col-md-5 offset-md-1 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">05</p>
            <h3 className="fw-300">Analytics</h3>
            <p>We collect user data and provide valuable insights back to you to help you convert your visitors to customers.</p>
          </Col>
        </Row>

        <Row className="gap-y align-items-center">
          <Col className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down order-md-12">
            <img src={embedPicSrc} alt="..." />
          </Col>
          <Col className="col-12 col-md-5 text-center text-md-left">
            <p className="fs-60 fw-900 opacity-10">06</p>
            <h3 className="fw-300">Embed</h3>
            <p>Our breakthrough product allows anyone to view your product in AR <strong> straight through the browser</strong>.
              <br />
              You integrate the tech into your ecommerce solution with one line of code.
          </p>
          </Col>
        </Row>

        <Row className="gap-y align-items-center mt-20">
          <Col className="col-12 align-self-center text-center hidden-sm-down">
            <GetStartedButton />
          </Col>
        </Row>


      </Container>
    </section>

    <section className="section py-0 overflow-hidden">
      <Container>
        <header className="section-header">
          <h2>We work with all types of lifestyle businesses</h2>
          <hr />
          <p className="lead"> Increase conversion, reduce returns, sell more with AR today!</p>
        </header>

        <Row className="row gap-y text-center">
          <Col className="col-md-4 col-12 d-flex flex-column">
            <div className="mb-60">
              <p className={cx('text-info fs-50 mb-0', styles.blueText)}>Fashion</p>
              <p>Shoes, accessories, jewlery, clothing</p>
            </div>
            <div className="px-20 mt-auto">
              <img className={cx('opacity-80"', styles.imageHeight)} src={fashionPicSrc} alt="..." data-aos="slide-up" data-aos-delay="300" />
            </div>
          </Col>

          <Col className="col-md-4 col-12 d-flex flex-column">
            <div className="mb-7">
              <p className={cx('text-info fs-50 mb-0', styles.blueText)}>Interior</p>
              <p>Furniture, lamps, home decorations</p>
            </div>
            <div className="mt-auto">
              <img className={cx('opacity-80"', styles.imageHeight)} src={interiorPicSrc} alt="..." data-aos="slide-up" />
            </div>
          </Col>

          <Col className="col-md-4 col-12 d-flex flex-column">
            <div className="mb-7">
              <p className={cx('text-info fs-50 mb-0', styles.blueText)}>Art</p>
              <p>Galleries, auction houses, museums</p>
            </div>
            <div className="px-20 mt-auto">
              <img className={cx('opacity-80"', styles.imageHeight)} src={artPicSrc} alt="..." data-aos="slide-up" data-aos-delay="600" />
            </div>
          </Col>

        </Row>

      </Container>
    </section>

  </main>
)

export default ProductPage
