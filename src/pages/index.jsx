import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import ModelViewer from '../components/ModelViewer'
import GetStartedButton from '../components/GetStartedButton/GetStartedButton'
import videoPosterSrc from '../assets/video/frontpageloop.jpg'
import videoMp4Src from '../assets/video/frontpageloop.mp4'
import videoWebMSrc from '../assets/video/frontpageloop.webm'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <header className="header header-inverse h-fullscreen p-0 overflow-hidden" data-overlay="4">
      <video className="bg-video" poster={videoPosterSrc} autoPlay loop>
        <source src={videoMp4Src} type="video/mp4" />
        <source src={videoWebMSrc} type="video/webm" />
      </video>

      <Container className={cx('text-center', styles.test)}>

        <Row className="h-full">
          <Col className="col-12 col-lg-8 offset-lg-2 align-self-center pt-150">
            <h1 className="display-4 fw-600 hidden-sm-down">Augmented Reality for lifestyle ecommerce</h1>
            <h2 className="fw-300 hidden-md-up">Instant web and mobile AR for your business.</h2>
            <br />
            <GetStartedButton />
            <br />
            <br />
            <p className="fs-12"><span className="opacity-60 mr-8">Or</span>
              <a className="text-white mark-border" href="#">Learn More</a>
            </p>
          </Col>
          <div className="col-12 align-self-end text-center pb-50">
            <a className="scroll-down-1 scroll-down-inverse" href="#" data-scrollto="section-intro"><span></span></a>
          </div>

        </Row>
      </Container>
    </header>

    <main className="main-content">

      <section className="section">
        <Container className="">
          <header className="section-header">
            <h2>How it Works</h2>
            <hr />
          </header>

          <ModelViewer modelIds={[
            '11130d3a-be12-480c-bb0e-29b0558a9197', // Gold chair
            '9b285fc4-b892-421d-9856-c90d2016d425', // LV handbag
            '0c0b7508-02d6-4ec0-af7b-404faad43be8', // Muuce
            '4bbe458d-c287-43b5-9c78-4d36956ee7b1' // Sneaker
          ]} />
          {/*<img src="http://thetheme.io/thesaas/assets/img/feature-tablet.png" alt="..." data-aos="fade-up" data-aos-duration="2000" /> */}

          <Row className="gap-y">
            <Col className="col-12 col-md-6 col-xl-3">
              <div className="flexbox gap-items-4">
                <div>
                  <i className="fa fa-tv fs-25 pt-4 text-secondary"></i>
                </div>

                <div>
                  <h5>Photorealistic 3D</h5>
                  <p>We help you digitize your products into highly realistic, true 3D models.</p>
                </div>
              </div>
            </Col>

            <Col className="col-12 col-md-6 col-xl-3">
              <div className="flexbox gap-items-4">
                <div>
                  <i className="fa fa-cubes fs-25 pt-4 text-secondary"></i>
                </div>

                <div>
                  <h5>Perfect for mobile</h5>
                  <p>Cimmerse is designed and built for mobile use. Mobile phones, mobile AR, mobile VR. We love mobile!</p>
                </div>
              </div>
            </Col>

            <Col className="col-12 col-md-6 col-xl-3">
              <div className="flexbox gap-items-4">
                <div>
                  <i className="fa fa-wrench fs-25 pt-4 text-secondary"></i>
                </div>

                <div>
                  <h5>3D on any device</h5>
                  <p>We provide the platform that lets your customers see your products in 3D on any device with a web browser</p>
                </div>
              </div>
            </Col>

            <Col className="col-12 col-md-6 col-xl-3">
              <div className="flexbox gap-items-4">
                <div>
                  <i className="fa fa-code fs-25 pt-4 text-secondary"></i>
                </div>

                <div>
                  <h5>AR & VR support</h5>
                  <p>Our platform can give your customers a brand new and completely immersive experience exploring your products in virtual reality.</p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </main>
  </div>
)

export default IndexPage
