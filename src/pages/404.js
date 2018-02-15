import React from 'react'

import Link from 'gatsby-link'
import cx from 'classnames'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const NotFoundPage = () => (
  <main className="main-content">
    <section className="section py-100">
      <div className="container">
        <header className="section-header">
          <small>Oops</small>
          <h2>Page Not Found!</h2>
          <hr />
          <p className="lead">Seems you're looking for something that doesn't exist.</p>
        </header>

        <br />
        <p className="text-center"><a className="btn btn-primary" href="index.html">Return home</a></p>

      </div>
    </section>


  </main>
)

export default NotFoundPage
