import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './PortfolioItem.module.scss'

class PortfolioItem extends Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { imageSrc, headline, testimonial } = this.props

    return (
      <div
        className={cx('portfolio-1')}
        onClick={this.handleClick}
      >
        <img src={imageSrc} />
        <div className="portfolio-details">
          <h5>{headline}</h5>
          <p className={styles.testimonial}>{testimonial}</p>
        </div>
      </div>
    )
  }

  handleClick () {
    // Super-weird iOS Safari hover behaviour means having this no-op
    // method on click have the testimonial appear as expected on iOS.
  }
}

export default PortfolioItem
