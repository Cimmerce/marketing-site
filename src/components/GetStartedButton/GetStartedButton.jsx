import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const propTypes = {
  buttonText: PropTypes.string
}

const GetStartedButton = ({ buttonText }) => (
  <Button
    color='primary'
    size='sm'
    onClick={() => { document.getElementById('getStartedButton').click() }}
  >{ buttonText || 'Get started' }</Button>
)

GetStartedButton.propTypes = propTypes

export default GetStartedButton
