import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

import pressPic1Src from '../assets/images/press_pic_1.png'
import pressPic2Src from '../assets/images/press_pic_2.png'
import pressPicInsiderSrc from '../assets/images/insider_trends.png'
import conferencePic1Src from '../assets/images/awe.png'
import conferencePic2Src from '../assets/images/shop_talk_pic.png'
import ericPic1Src from '../assets/images/eric.jpg'
import casperPic1Src from '../assets/images/casper.jpg'
import yoniPic1Src from '../assets/images/yoni.jpg'
import henriPic1Src from '../assets/images/henri.jpg'

import styles from './about.module.scss'


const AboutPage = () => (
  <main className="main-content">
    <section className="section py-100">
      <Container className="">
        <header className="section-header">
          <h1>About Us</h1>
          <p className="fs-20 opacity-70">A web based full-service 3D, AR, & VR platform for ecommerce</p>
        </header>
        <header className="section-header">
          <h2>Who We Are</h2>
          <hr />
          <p className="lead">Meet the team working on the future of augmented reality ecommerce.</p>
        </header>

        <Row className="gap-y">
          <Col className="col-6 col-md-3 team-2">
            <img className={styles.teamPicture} src={ericPic1Src} alt="..." />
            <h5>Eric Prince</h5>
            <small>Co-Founder & CEO</small>
            <br />
            <div className="social social-boxed social-rounded social-gray">
              <a className="social-linkedin" href="https://www.linkedin.com/in/eric-prince-68215a4/" target="blank"><i className="ti ti-linkedin"></i></a>
            </div>
          </Col>

          <Col className="col-6 col-md-3 team-2">
            <img className={styles.teamPicture} src={casperPic1Src} alt="..." />
            <h5>Casper Fabricius</h5>
            <small>Co-Founder & CTO</small>
            <br />
            <div className="social social-boxed social-rounded social-gray">
              <a className="social-linkedin" href="https://www.linkedin.com/in/casper/" target="blank"><i className="ti ti-linkedin"></i></a>
            </div>
          </Col>

          <Col className="col-6 col-md-3 team-2">
            <img className={styles.teamPicture} src={yoniPic1Src} alt="..." />
            <h5>Yoni Binstock</h5>
            <small>Senior Web AR/VR Engineer</small>
            <br />
            <div className="social social-boxed social-rounded social-gray">
              <a className="social-linkedin" href="https://www.linkedin.com/in/yonibinstock/" target="blank"><i className="ti ti-linkedin"></i></a>
            </div>
          </Col>

          <Col className="col-6 col-md-3 team-2">
            <img className={styles.teamPicture} src={henriPic1Src} alt="..." />
            <h5>Henri Lee</h5>
            <small>Head of Sales</small>
            <br />
            <div className="social social-boxed social-rounded social-gray">
              <a className="social-linkedin" href="https://www.linkedin.com/in/henri-g-lee-6a36b5b5/" target="blank"><i className="ti ti-linkedin"></i></a>
            </div>
          </Col>
        </Row>

      </Container>
    </section>

    <section className={cx('section', styles.gradientBackground)}>
      <Container className="">

        <Row className="">

          <Col className={cx('col-12 col-lg-12 pl-50 pr-80"', styles.centerAbout)} >
            <h2 className="text-center">Our Vision</h2>
            <p className="lead">
              The Internet is one of the most significant inventions to modern humans and ushered in the Information Age. Since it's inception the user interface has been 2D, until now.
              <br /> <br />
              We are entering the next paradign shift with volumetric computing. A 3D mixed reality interface available in real time whevere the web is accesible.
              With new satellite Internet technologies and current infrastructure making it omnipresent.
              <br /> <br />
              Cimmerse is using its vision and expertise to realize the no barrier, democratization of knowledge, industry, and ubiquitous real time computing.
              <br /> <br />
              We are futurist and visionaries realiging this amazing opportunity today! We look forward to finding likeminded partners to add to our journey in becoming the next web leader.
            </p>
          </Col>

        </Row>

      </Container>
    </section>

    <section className="section">
      <Container className="">

        <header className="section-header">
          <h2>Where to Meet Us</h2>
          <hr />
          <p className="lead">Conferences and events where we'll be giving talks and exhibiting our product.</p>
        </header>

        <Row className="gap-y">

          <Col className="col-12 col-lg-6">
            <a href="https://hbgtech.se/" className="card card-bordered card-hover-shadow text-center">
              <div className="card-block">
                <br />
                <p><div className={styles.textLogo}>#HBGTECH</div></p>
                <br />
                <h4 className="card-title">HBGTech</h4>
                <small>May 2018</small>
              </div>
            </a>
          </Col>

          <Col className="col-12 col-lg-6">
            <a href="https://augmentedworldexpo.com/" className="card card-bordered card-hover-shadow text-center">
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={conferencePic1Src} /></p>
                <br />
                <h4 className="card-title">Augmented World Expo</h4>
                <small>May 2018</small>
              </div>
            </a>
          </Col>

        </Row>
      </Container>
    </section>

    <section className="section bg-gray">
      <Container className="">

        <header className="section-header">
          <h2>Press Coverage</h2>
          <hr />
          <p className="lead">Read all the news, reports and stories published about our startup.</p>
        </header>

        <Row className="gap-y">

          <Col className="col-12 col-lg-4 d-flex align-items-stretch">
            <a href="https://www.insider-trends.com/2018-update-50-best-retail-tech-startups/" className="card card-bordered card-hover-shadow text-center">
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={pressPicInsiderSrc} /></p>
                <br />
                <h4 className="card-title">Named Cimmerse as on of "50 Best Retail Tech Startups"</h4>
                <small>March 2018</small>
              </div>
            </a>
          </Col>

          <Col className="col-12 col-lg-4 d-flex align-items-stretch">
            <a href="https://www.business.dk/vaekst/her-er-de-15-der-slap-gennem-elevator-testen-i-berlingske-business-boost" className="card card-bordered card-hover-shadow text-center">
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={pressPic1Src} /></p>
                <br />
                <h4 className="card-title">"B2B platform for web-based solutions in 3D, Virtual Reality and Augmented Reality"</h4>
                <small>November 2017</small>
              </div>
            </a>
          </Col>

          <Col className="col-12 col-lg-4 d-flex align-items-stretch">
            <a href="http://cphpost.dk/news/goggle-me-up-scotty-this-is-the-final-frontier.html" className="card card-bordered card-hover-shadow text-center">
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={pressPic2Src} /></p>
                <br />
                <h4 className="card-title">"The platform aims to make high-resolution, interactive models of physical objects available through a web browser, both on mobile as well as PC"</h4>
                <small>July 2017</small>
              </div>
            </a>
          </Col>

        </Row>
      </Container>
    </section>

  </main>
)

export default AboutPage
