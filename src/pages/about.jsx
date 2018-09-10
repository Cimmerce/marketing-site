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
import forbesLogoSrc from '../assets/images/forbes-logo-transparent.png'
import rfGlobalNetLogoSrc from '../assets/images/rfglobalnet-logo.jpg'
import conferencePic1Src from '../assets/images/awe.png'
import conferencePic2Src from '../assets/images/shop_talk_pic.png'
import slushLogoSrc from '../assets/images/slush.jpg'
import ericPic1Src from '../assets/images/eric.jpg'
import casperPic1Src from '../assets/images/casper.jpg'
import yoniPic1Src from '../assets/images/yoni.jpg'
import henriPic1Src from '../assets/images/henri.jpg'

import styles from './about.module.scss'


const AboutPage = () => (
  <main className="main-content">

    <section className="section">
      <Container className="">

        <header className="section-header">
          <h2>Press Coverage</h2>
          <hr />
          <p className="lead">Read all the news, reports and stories published about our startup.</p>
        </header>

        <Row className="gap-y">
          <Col className="col-12 col-lg-4 d-flex align-items-stretch">
            <a href="https://www.forbes.com/sites/roslynlayton/2018/06/06/5g-can-reinvent-ecommerce-with-ar-and-vr-if-policymakers-allow/" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={forbesLogoSrc} /></p>
                <br />
                <h4 className="card-title">Cimmerse CEO Eric Prince<br />featured in Forbes</h4>
                <small>June 2018</small>
              </div>
            </a>
          </Col>

          <Col className="col-12 col-lg-4 d-flex align-items-stretch">
            <a href="https://www.rfglobalnet.com/doc/the-week-in-g-g-pcs-from-intel-and-sprint-coming-next-year-uk-conducts-first-live-g-trial-ar-vr-needs-g-to-boost-ecommerce-0001" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={rfGlobalNetLogoSrc} /></p>
                <br />
                <h4 className="card-title">Cimmerse part of<br />This in Week 5G</h4>
                <small>June 2018</small>
              </div>
            </a>
          </Col>

          <Col className="col-12 col-lg-4 d-flex align-items-stretch">
            <a href="https://www.insider-trends.com/2018-update-50-best-retail-tech-startups/" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
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
            <a href="https://www.business.dk/vaekst/her-er-de-15-der-slap-gennem-elevator-testen-i-berlingske-business-boost" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
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
            <a href="http://cphpost.dk/news/goggle-me-up-scotty-this-is-the-final-frontier.html" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
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


    <section className="section bg-gray">
      <Container className="">

        <header className="section-header">
          <h2>Where to Meet Us</h2>
          <hr />
          <p className="lead">Conferences and events where we'll be giving talks and exhibiting our product.</p>
        </header>

        <Row className="gap-y">
          <Col className="col-12 col-lg-6">
            <a href="https://eu.augmentedworldexpo.com/" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={conferencePic1Src} /></p>
                <br />
                <h4 className="card-title">AWE Europe</h4>
                <small>October 2018</small>
              </div>
            </a>
          </Col>
          <Col className="col-12 col-lg-6">
            <a href="http://www.slush.org/" className={cx("card card-bordered card-hover-shadow text-center", styles.width100)}>
              <div className="card-block">
                <br />
                <p><img className={styles.imgSize} src={slushLogoSrc} /></p>
                <br />
                <h4 className="card-title">Slush</h4>
                <small>December 2018</small>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section py-100">
      <Container className="">
        <header className="section-header">
          <h1>About Us</h1>
          <p className="fs-20 opacity-70">A web based full-service 3D, AR, & VR platform for ecommerce</p>
        </header>
        <header className="section-header">
          <h2>About the founders</h2>
          <hr />
        </header>

        <Row>
          <Col className="col-12 col-md-2 team-2">
            <img className={styles.teamPicture} src={ericPic1Src} alt="..." />
            <h5>Eric Prince</h5>
            <small>Co-Founder & CEO</small>
            <div className="social social-boxed social-rounded social-gray">
              <a className="social-linkedin" href="https://www.linkedin.com/in/eric-prince-68215a4/" target="blank"><i className="ti ti-linkedin"></i></a>
            </div>
          </Col>
          <Col className="col-12 col-md-4">
            <p>Co-founder Eric Prince is our product designer, photogrammetrist and CEO. He is a designer, experienced entrepreneur and 3D digitization expert with business and sales experience. With over 20 years of 3D design and development experience for online, PC, mobile entertainment and consumer industries, Eric guarantees superior 3D visualization and experience.</p>
          </Col>
          <Col className="col-6 col-md-2 team-2">
            <img className={styles.teamPicture} src={casperPic1Src} alt="..." />
            <h5>Casper Fabricius</h5>
            <small>Co-Founder & CTO</small>
            <div className="social social-boxed social-rounded social-gray">
              <a className="social-linkedin" href="https://www.linkedin.com/in/casper/" target="blank"><i className="ti ti-linkedin"></i></a>
            </div>
          </Col>
          <Col className="col-12 col-md-4">
            <p>Co-founder Casper Fabricius is our software engineer, AR expert and CTO. He is a full-stack web and VR AR developer with a masters degree in business administration and computer science. He has early and growth stage startup experience, and over 15 years of web development experience from startups, large companies and freelancing. Casper is specialized in the cross section between VR, AR and internet technology, and is a leading expert and popular conference speaker on web-based VR and AR.</p>
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
              The Internet is one of the most significant inventions to modern humans and ushered in the Information Age. Since its inception, the user interface has been 2D, until now.
              <br /> <br />
              We are entering the next paradigm shift with volumetric spatial computing. A 3D mixed reality interface available in real time wherever the web is accessible. With new satellite Internet technologies and soon 5G upgrades to current infrastructures making it omnipresent. Cimmerse is using its vision and expertise to realize the no barrier, democratization of knowledge, industry, and ubiquitous real time computing.
              <br /> <br />
              We are futurists and visionaries realizing this amazing opportunity today! We look forward to finding like minded partners to add to our journey in becoming the next web leader.
            </p>
          </Col>

        </Row>

      </Container>
    </section>
  </main>
)

export default AboutPage
