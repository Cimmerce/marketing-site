import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import {
    Container,
    Row,
    Col
} from 'reactstrap'



const ContactPage = () => (
    <main className="main-content">
        <section className="section py-100">

            <Container className="text-center">

                <Row className="">
                    <Col className="col-12 col-lg-8 offset-lg-2">

                        <h1>Contact Us</h1>
                        <p className="fs-20 opacity-70">We can't wait to hear from you</p>
                    </Col>
                </Row>

            </Container>
        </section>

        <section className="section">
            <Container className="">

                <Row className="gap-y">
                    <Col className="col-12 col-md-6">
                    </Col>


                    <Col className="col-12 col-md-5 offset-md-1">
                        <div className="bg-grey h-full p-20">
                            <p>We try to answer all enquiries within 24 hours.</p>

                            <p className="lead">Cimmerse IVS <br/>
                            Hauser Plads 16A<br />1127 Copenhagen K</p>

                            <div>
                                <span className="d-inline-block w-20 text-lighter" title="Email">E:</span>
                                <span className="fs-14">info@cimmerse.com</span>
                            </div>

                            <div>
                                <span className="d-inline-block w-20 text-lighter" title="Phone">P:</span>
                                <span className="fs-14">+45 42 61 78 50</span>
                            </div>

                        </div>
                    </Col>
                </Row>

            </Container>
        </section>

        <div className="h-400" data-provide="map" data-lat="44.540" data-lng="-78.556" data-marker-lat="44.540" data-marker-lng="-78.556" data-zoom="6" data-style="light"></div>

    </main>
)

export default ContactPage
