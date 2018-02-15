import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'


import videoPosterSrc from '../assets/testvideo.jpg'
import videoMp4Src from '../assets/testvideo.mp4'
import videoWebMSrc from '../assets/testvideo.webm'
import styles from './index.module.scss'


const IndexPage = () => (
  <div>
    <header className="header header-inverse h-fullscreen p-0 overflow-hidden" data-overlay="7">
      <video className="bg-video" poster={videoPosterSrc} autoPlay loop>
        <source src={videoMp4Src} type="video/mp4" />
        <source src={videoWebMSrc} type="video/webm" />
      </video>

      <Container className={cx('text-center', styles.test)}>

        <Row className="h-full">
          <Col className="col-12 col-lg-8 offset-lg-2 align-self-center pt-150">

            <h1 className="display-4 fw-100 hidden-sm-down">AR-enabled mobile web sales</h1>
            <h1 className="fw-100 hidden-md-up">Integrates right into your ecommerce solution</h1>
            <br /><br />
            <p className="lead hidden-sm-down">Watch a demo video in one minute before taking your decision.</p>
            <p><a className="btn btn-lg btn-circular btn-white" href="#"><i className="fa fa-play"></i></a></p>
            <br />
            <p className="fs-12"><span className="opacity-60 mr-8">Or</span> <a className="text-white mark-border" href="#">Purchase Now</a></p>

          </Col>

          // <div className={styles.test}> This is for including styling without needed to merge style guides</div>
          

          <div className="col-12 align-self-end text-center pb-50">
            <a className="scroll-down-1 scroll-down-inverse" href="#" data-scrollto="section-intro"><span></span></a>
          </div>

        </Row>

      </Container>
    </header>

    <main className="main-content">
      <section className="section" id="section-intro">
        <Container className="">
          <header className="section-header">
            <small>Headers</small>
            <h2>More Headers</h2>
            <hr />
            <p className="lead">TheSaaS includes several header examples which can be use just by copy and paste the code</p>
          </header>
        </Container>
      </section>
    </main>
  </div>
)

export default IndexPage
