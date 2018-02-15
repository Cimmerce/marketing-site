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
    <section class="section py-100">
      <div class="container">
        <header class="section-header">
          <small>Oops</small>
          <h2>Page Not Found!</h2>
          <hr />
          <p class="lead">Seems you're looking for something that doesn't exist.</p>
        </header>

        <br />
        <p class="text-center"><a class="btn btn-primary" href="index.html">Retrun home</a></p>

      </div>
    </section>


  </main>
)

export default NotFoundPage
