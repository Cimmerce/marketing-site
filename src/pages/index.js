import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'


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
            <h1 className="display-4 fw-100 hidden-sm-down">Augmented Reality for lifestyle ecommerce</h1>
            <h2 className="fw-100 hidden-md-up">Instant web and mobile AR for your business.</h2>
            <br />
            <button className="btn btn-small btn-primary">
              <a className={styles.getStarted} href="#">Get started</a>
            </button>
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
            <hr/>
          </header>

          <Row className="gap-y">
            <Col className="col-12 offset-md-2 col-md-8 mb-30">
              <img src="http://thetheme.io/thesaas/assets/img/feature-tablet.png" alt="..." data-aos="fade-up" data-aos-duration="2000"/>
            </Col>
            <Col className="col-12 col-md-6 col-xl-3">
              <div className="flexbox gap-items-4">
                <div>
                  <i className="fa fa-tv fs-25 pt-4 text-secondary"></i>
                </div>

                <div>
                  <h5>Photorealistic 3D scans </h5>
                  <p>We help you digitize your products into highly realistic, true 3D models.</p>
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
                  <i className="fa fa-code fs-25 pt-4 text-secondary"></i>
                </div>

                <div>
                  <h5>Augmented & Virtual Reality support</h5>
                  <p>Our platform can give your customers a brand new and completely immersive experience exploring your products in virtual reality.</p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className="section bg-gray">
        <Container className="">

          <header className="section-header">
            <small>In The News</small>
            <h2>Press Coverage</h2>
            <hr/>
            <p className="lead">Read all the news, reports and stories that published about our startup.</p>
          </header>

          <Row className="gap-y">

            <Col className="col-12 col-lg-6">
              <a href="https://www.business.dk/vaekst/her-er-de-15-der-slap-gennem-elevator-testen-i-berlingske-business-boost" class="card card-bordered card-hover-shadow text-center">
                <div className="card-block">
                  <br/>
                  <p><img src="https://imgur.com/O2bBM12"/></p>
                  <br/>
                  <h4 className="card-title">"B2B platform for web-based solutions in 3D, Virtual Reality and Augmented Reality"</h4>
                  <small>November 2017</small>
                </div>
              </a>
            </Col>

            <Col className="col-12 col-lg-6">
              <a href="http://cphpost.dk/news/goggle-me-up-scotty-this-is-the-final-frontier.html" class="card card-bordered card-hover-shadow text-center">
                <div className="card-block">
                  <br/>
                  <p><img src="https://imgur.com/O2bBM12"/></p>
                  <br/>
                  <h4 className="card-title">"The platform aims to make high-resolution, interactive models of physical objects available through a web browser, both on mobile as well as PC"</h4>
                  <small>July 2017</small>
                </div>
              </a>
            </Col>

          </Row>
        </Container>
      </section>
    </main>
  </div>
)

export default IndexPage
