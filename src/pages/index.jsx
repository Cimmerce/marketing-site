import React, { Component } from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Button,
  Container, Row, Col,
  Card, CardText, CardBody, CardTitle,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Element, Link as ScrollLink
} from 'react-scroll'
import Waypoint from 'react-waypoint'

import ModelViewer from '../components/ModelViewer'
import GetStartedButton from '../components/GetStartedButton/GetStartedButton'
import VideoModal from '../components/VideoModal/VideoModal'
import videoPosterSrc from '../assets/video/frontpageloop.jpg'
import videoMp4Src from '../assets/video/frontpageloop.mp4'
import videoWebMSrc from '../assets/video/frontpageloop.webm'
import styles from './index.module.scss'
import videoThumbnailSrc from '../assets/images/1minvideo.jpg'
import './index.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.bindMethods()

    this.state = {
      isHeaderVideoPlaying: true,
      is1MinuteVideoPlaying: false
    }
  }

  bindMethods() {
    this.handle1MinuteVideoModalToggled = this.handle1MinuteVideoModalToggled.bind(this)
    this.playHeaderVideo = this.playHeaderVideo.bind(this)
    this.pauseHeaderVideo = this.pauseHeaderVideo.bind(this)
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.playHeaderVideo} onLeave={this.pauseHeaderVideo}>
          <header className="header header-inverse h-fullscreen p-0 overflow-hidden">
            <video className="bg-video" poster={videoPosterSrc} autoPlay loop={this.state.isHeaderVideoPlaying} muted playsInline preload="metadata">
              <source src={videoWebMSrc} type="video/webm" />
              <source src={videoMp4Src} type="video/mp4" />
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
                    <ScrollLink
                      href="#mainContent"
                      to="mainContent"
                      className="text-white mark-border"
                      smooth={true} duration={500}
                    >
                      Learn More
                    </ScrollLink>
                  </p>
                </Col>
                <div className="col-12 align-self-end text-center pb-50">
                  <ScrollLink
                    href="#mainContent"
                    to="mainContent"
                    className="scroll-down-1 scroll-down-inverse"
                    smooth={true} duration={500}
                  >
                    <span></span>
                  </ScrollLink>
                </div>

              </Row>
            </Container>
          </header>
        </Waypoint>

        <main className="main-content">
          <Element name="mainContent"></Element>

          <section className="section">
            <Container>
              <header className="section-header">
                <h2>Try it for yourself</h2>
                <hr />
              </header>

              <ModelViewer modelIds={[
                '2a0c912c-6a81-44dd-b442-01c0c09ad8fd', // Brown leather couch
                'a7869d2c-f262-4df7-bca9-7c3fcd79b902', // Nike Pegasus shoe
                '9b285fc4-b892-421d-9856-c90d2016d425', // LV handbag
                '0c0b7508-02d6-4ec0-af7b-404faad43be8' // Muuce
              ]} />
            </Container>
          </section>

          <section className="section bg-gray">
            <Container>
              <header className="section-header mb-0">
                <h2>How it Works</h2>
                <div className={styles.playVideoContainer}>
                  <img
                    src={videoThumbnailSrc}
                    id="PlayVideoButton"
                    onClick={this.handle1MinuteVideoModalToggled}
                    className={styles.playVideoThumbnail}
                  />
                  <Button
                    size="xl" color="primary"
                    className={cx('btn-circular', styles.playVideoButton)}
                  >
                    &nbsp;
                    <i className="ti-control-play"></i>
                  </Button>
                </div>
                <p>Cimmerse in 1 minute</p>
                <VideoModal
                  isOpen={this.state.is1MinuteVideoPlaying}
                  onToggle={this.handle1MinuteVideoModalToggled}
                />
                <UncontrolledTooltip placement="top" target="PlayVideoButton">
                  Play product video
                </UncontrolledTooltip>
              </header>

              <Row className="gap-y my-20">
                <Col className="col-12 text-center">
                  <p className={styles.leadTextLarge}>
                    Cimmerse tech seamlessly integrates your 2D product photo with a highly realistic interactive 3D model. With any mobile device and a tap of an icon, customers can place your products in the same room with them and experience real-time Augmented Reality.
                  </p>
                  <p className={styles.leadTextSmall}>
                    Shopping online has never been more convenient and detailed to actually see products instantly from a website anywhere and all the time!
                  </p>
                </Col>
              </Row>

              <Row className="gap-y">
                <Col className="col-12 col-md-6 col-xl-3 d-flex align-items-stretch">
                  <Card className="gap-items-4 card-bordered card-shadowed">
                    <CardBody>
                      <CardTitle>Photorealistic 3D</CardTitle>
                      <CardText>We help you digitize your products into highly realistic, true 3D models.</CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col className="col-12 col-md-6 col-xl-3 d-flex align-items-stretch">
                  <Card className="gap-items-4 card-bordered card-shadowed">
                    <CardBody>
                      <CardTitle>Perfect for mobile</CardTitle>
                      <CardText>Cimmerse is designed and built for mobile use. Mobile phones, mobile AR, & mobile VR.</CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col className="col-12 col-md-6 col-xl-3 d-flex align-items-stretch">
                  <Card className="gap-items-4 card-bordered card-shadowed">
                    <CardBody>
                      <CardTitle>3D on any device</CardTitle>
                      <CardText>We provide the platform that lets your customers see your products in 3D on any device with a web browser.</CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col className="col-12 col-md-6 col-xl-3 d-flex align-items-stretch">
                  <Card className="gap-items-4 card-bordered card-shadowed">
                    <CardBody>
                      <CardTitle>AR & VR support</CardTitle>
                      <CardText>Our platform can give your customers a brand new and completely immersive experience exploring your products in virtual reality.</CardText>
                    </CardBody>
                  </Card>
                </Col>

              </Row>

              <Row className="gap-y">
                <Col className="col-12 col-md-12">
                  <p className="text-center py-3">
                    <GetStartedButton />
                    <span className="ml-2 mr-2">or</span>
                    <Link
                      to="/product"
                      className="mark-border"
                    >
                      Learn More
                    </Link>
                  </p>
                </Col>

              </Row>
            </Container>
          </section>
        </main>
      </div>
    )
  }

  handle1MinuteVideoModalToggled () {
    this.setState({ is1MinuteVideoPlaying: !this.state.is1MinuteVideoPlaying })
  }

  playHeaderVideo () {
    this.setState({ isHeaderVideoPlaying: true })
  }

  pauseHeaderVideo () {
    this.setState({ isHeaderVideoPlaying: false })
  }
}

export default IndexPage
