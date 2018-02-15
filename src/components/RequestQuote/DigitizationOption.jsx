import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup, FormText, Label, Input
} from 'reactstrap'

const propTypes = {
  onDigitizationOptionToggled: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string.isRequired
}


const DigitizationOption = props => (
  <FormGroup check>
    <Label check>
      <Input
        type="checkbox"
        onChange={props.onDigitizationOptionToggled}
        checked={props.isSelected}
      />{` ${props.label}`}
    </Label>
    <FormText color="muted">
      {props.helpText}
    </FormText>
  </FormGroup>
)

DigitizationOption.propTypes = propTypes

export default DigitizationOption
