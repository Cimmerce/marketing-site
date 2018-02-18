import React from 'react'

import Link from 'gatsby-link'
import cx from 'classnames'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import styles from './clients.module.scss'


import metaluxSrc from '../assets/images/metalux.png'
import muuceSrc from '../assets/images/muuce.jpg'
import poshtelSrc from '../assets/images/poshtel.png'
import vtexSrc from '../assets/images/VTEX.png'


const ClientsPage = () => (
    <main className="main-content">
    <section className="section py-50">

    <Container className="text-center">
        <Row className="">
            <Col className="col-12 col-lg-8 offset-lg-2">
                <header className="section-header">
                    <h1>Our Customers</h1>
                </header>
            </Col>
        </Row>
    </Container>
</section>

        <section className="section">
        <Container className="">

          <h5 className="mb-20">Related Projects</h5>

          <Row className="gap-y gap-2">

            <Col className="col-6 col-lg-3">
              <a className="portfolio-1">
                <img src={metaluxSrc} />
                <div className="portfolio-details">
                  <h5>Metalux</h5>
                  <p className={styles.testimonial}>“No way! This is like I am standing in front of the real thing, my customers will love this!”</p>
                </div>
              </a>
            </Col>

            <Col className="col-6 col-lg-3">
              <a className="portfolio-1">
                <img src={muuceSrc} />
                <div className="portfolio-details">
                  <h5>Muuce</h5>
                  <p className={styles.testimonial}>“This is going to change how people buy art and place it in their homes, amazing”</p>
                </div>
              </a>
            </Col>

            <Col className="col-6 col-lg-3">
              <a className="portfolio-1">
                <img src={poshtelSrc}/>
                <div className="portfolio-details">
                  <h5>Poshtell</h5>
                  <p className={styles.testimonial}>“It’s too awesome, we will be able to put our clients in any location we have in the world.”</p>
                </div>
              </a>
            </Col>

            <Col className="col-6 col-lg-3">
              <a className="portfolio-1">
                <img src={vtexSrc} />
                <div className="portfolio-details">
                  <h5>VTEX</h5>
                  <p className={styles.testimonial}>“Our customers had a great VR experience having access to hundreds of potential partners at their fingertips”</p>
                </div>
              </a>
            </Col>

          </Row>

        </Container>
      </section>

      <section className="section">
      <Container className="">
        <div className="section-header">
          <h2>The Future of eCommerce</h2>
        </div>

        <Row className="gap-y gap-2 text-center">

          <Col className="col-12 col-lg-4">
              <h5>74% of consumers expect AR </h5>
              <p className="small">"Almost three quarters of consumers say they now expect retailers to offer
              them some kind of augmented reality experience"</p>
              <p className={styles.citation}>http://digitalbridge.eu/app/uploads/2017/09/DB-ChangingUKRetail_v2.pdf</p>
          </Col>

          <Col className="col-12 col-lg-4">
              <h5>75% of consumers prefer web based AR</h5>
              <p className="small">"Only 17% of consumers think AR would work best for a retailer via a dedicated app,
              compared to the 75% who think it would work best integrated directily into
              a retailer's website" </p>
              <p className={styles.citation}>http://digitalbridge.eu/app/uploads/2017/09/DB-ChangingUKRetail_v2.pdf</p>
          </Col>

          <Col className="col-12 col-lg-4">
              <h5>Users are 11 times more likely to purchase</h5>
              <p className="small">"Those who used AR features were 11 times more likely to purchase and spend 2.7
              times more time in the app" </p>
              <p className={styles.citation}>https://techcrunch.com/2017/09/19/a-new-arkit-app-from-houzz-brings-500000-objects-to-moveable-life/</p>
          </Col>

        </Row>

        <Row className="gap-y gap-2 text-center">

          <Col className="col-12 col-lg-4">
              <h5>Conversions up 30% </h5>
              <p className="small">"Golfsmith found 30% higher conversion rates amongst products
              being shown in 3D"</p>
              <p className={styles.citation}>https://www.slideshare.net/MollyPfister1/top-ten-sales-white-paper</p>
          </Col>

          <Col className="col-12 col-lg-4">
              <h5>Online sales up 263%</h5>
              <p class="small">"The technology added value to online shopping integrating VR, thus
              allowing customers to test products in the virtual environment before
              committing to purchase"</p>
              <p className={styles.citation}>https://www.vrfocus.com/2017/08/suning-commerce-group-uses-vr-and-ar-as-part-of-shopping-festival/</p>
          </Col>

          <Col className="col-12 col-lg-4">
              <h5>Returns down 50%</h5>
              <p className="small">"Fathead found that the return rate of their spinning products was reduced by 50%" </p>
              <p className={styles.citation}>https://www.slideshare.net/MollyPfister1/top-ten-sales-white-paper</p>
          </Col>

        </Row>

      </Container>
    </section>


    </main>
)

export default ClientsPage
