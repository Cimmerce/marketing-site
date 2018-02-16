import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardFooter,
  Button
} from 'reactstrap'

import styles from './RequestQuote.module.scss'

const propTypes = {
  onDigitizationOptionToggled: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string.isRequired
}

const DigitizationOption = props => (
  <Card
    className={cx({
      'card-bordered': true,
      'card-hover-shadow': true,
      [styles.digiOptionContainer]: true,
      [styles.digiOptionSelected]: props.isSelected
    })}
    onClick={props.onDigitizationOptionToggled}
  >
    <CardBody>
      <CardTitle>{props.label}</CardTitle>
      <CardText className={styles.helpText}>{props.helpText}</CardText>
    </CardBody>
    <CardFooter className='text-center'>
      <Button
        active={props.isSelected}
        color='success'
        className={styles.selectButton}
      >{props.isSelected ? <span className='ti-check'></span> : 'Select'}</Button>
  </CardFooter>
</Card>
)

DigitizationOption.propTypes = propTypes

export default DigitizationOption
