import React from 'react'

import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container, Row, Col,
  Card, CardHeader, CardText, CardBody, CardTitle
} from 'reactstrap'

import GetStartedButton from '../components/GetStartedButton/GetStartedButton'
import styles from './clients.module.scss'

import metaluxSrc from '../assets/images/metalux.png'
import muuceSrc from '../assets/images/muuce.jpg'
import poshtelSrc from '../assets/images/poshtel.png'
import vtexSrc from '../assets/images/VTEX.png'


const ClientsPage = () => (
  <main className="main-content">
    <section className="section">
      <header className="section-header">
        <h1>These Businesses are Getting Ahead</h1>
        <p className="lead">- and so can you.</p>
        <hr />
        <p>
          Touch or roll over the logos to see what they have to say.
        </p>
      </header>

      <Container>
        <Row className="gap-y gap-2">

          <Col className="col-6 col-lg-3">
            <div className="portfolio-1">
              <img src={metaluxSrc} />
              <div className="portfolio-details">
                <h5>Metalux</h5>
                <p className={styles.testimonial}>“No way! This is like I am standing in front of the real thing, my customers will love this!”</p>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-lg-3">
            <div className="portfolio-1">
              <img src={muuceSrc} />
              <div className="portfolio-details">
                <h5>Muuce</h5>
                <p className={styles.testimonial}>“This is going to change how people buy art and place it in their homes, amazing”</p>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-lg-3">
            <div className="portfolio-1">
              <img src={poshtelSrc} />
              <div className="portfolio-details">
                <h5>Poshtel</h5>
                <p className={styles.testimonial}>“It’s too awesome, we will be able to put our clients in any location we have in the world.”</p>
              </div>
            </div>
          </Col>

          <Col className="col-6 col-lg-3">
            <div className="portfolio-1">
              <img src={vtexSrc} />
              <div className="portfolio-details">
                <h5>VTEX</h5>
                <p className={styles.testimonial}>“Our customers had a great VR experience having access to hundreds of potential partners at their fingertips”</p>
              </div>
            </div>
          </Col>

        </Row>

      </Container>
    </section>

    <section className="section">
      <Container className="">
        <div className="section-header">
          <small>WE BRING YOU</small>
          <h2>The Future of Ecommerce</h2>
        </div>

        <Row className="gap-y gap-2 text-center">
          <Col className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
            <Card className="gap-items-4 card-bordered card-shadowed">
              <CardBody>
                <CardTitle>74% of consumers expect AR</CardTitle>
                <CardText>
                  "Almost three quarters of consumers say they now expect retailers to offer
                  them some kind of augmented reality experience"
                  <br /><br />
                  <span className={styles.citation}>http://digitalbridge.eu/app/uploads/2017/09/DB-ChangingUKRetail_v2.pdf</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
            <Card className="gap-items-4 card-bordered card-shadowed">
              <CardBody>
                <CardTitle>75% of consumers prefer web based AR</CardTitle>
                <CardText>
                  "Only 17% of consumers think AR would work best for a retailer via a dedicated app,
                  compared to the 75% who think it would work best integrated directily into
                  a retailer's website"
                  <br /><br />
                  <span className={styles.citation}>http://digitalbridge.eu/app/uploads/2017/09/DB-ChangingUKRetail_v2.pdf</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
            <Card className="gap-items-4 card-bordered card-shadowed">
              <CardBody>
                <CardTitle>Users are 11 times more likely to purchase</CardTitle>
                <CardText>
                  "Those who used AR features were 11 times more likely to purchase and spend 2.7
                  times more time in the app"
                  <br /><br />
                  <span className={styles.citation}>https://techcrunch.com/2017/09/19/a-new-arkit-app-from-houzz-brings-500000-objects-to-moveable-life/</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
            <Card className="gap-items-4 card-bordered card-shadowed">
              <CardBody>
                <CardTitle>Conversions up 30%</CardTitle>
                <CardText>
                  "Golfsmith found 30% higher conversion rates amongst products
                  being shown in 3D"
                  <br /><br />
                  <span className={styles.citation}>https://www.slideshare.net/MollyPfister1/top-ten-sales-white-paper</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
            <Card className="gap-items-4 card-bordered card-shadowed">
              <CardBody>
                <CardTitle>Online sales up 263%</CardTitle>
                <CardText>
                  "The technology added value to online shopping integrating VR, thus
                  allowing customers to test products in the virtual environment before
                  committing to purchase"
                  <br /><br />
                  <span className={styles.citation}>https://www.vrfocus.com/2017/08/suning-commerce-group-uses-vr-and-ar-as-part-of-shopping-festival/</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
            <Card className="gap-items-4 card-bordered card-shadowed">
              <CardBody>
                <CardTitle>Returns down 50%</CardTitle>
                <CardText>
                  "Fathead found that the return rate of their spinning products was reduced by 50%"
                  <br /><br />
                  <span className={styles.citation}>https://www.slideshare.net/MollyPfister1/top-ten-sales-white-paper</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section bg-gray">
      <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-12 col-md-9 text-center text-md-left">
            <h4 className="mb-0">Get a piece of the AR advantage today</h4>
          </div>

          <div className="col-12 col-md-3 text-center text-md-right">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </section>

  </main>
)

export default ClientsPage
