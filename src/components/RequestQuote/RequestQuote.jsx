import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Form, FormGroup, FormText, Label, Input,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

import DigitizationOption from './DigitizationOption'

class RequestQuote extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.bindMethods()

    this.state = {
      currentStep: 'intro',
      selectedDigitizationOptions: [],
      websiteUrl: '',
      companyName: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      comments: ''
    }
  }

  bindMethods () {
    this.gotoStep = this.gotoStep.bind(this)
    this.submitRequest = this.submitRequest.bind(this)
    this.onDigitizationOptionToggled = this.onDigitizationOptionToggled.bind(this)
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
  }

  render () {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
        {this.renderCurrentStep()}
      </Modal>
    )
  }

  renderCurrentStep () {
    switch(this.state.currentStep) {
      case 'digitization':
        return this.renderDigitizationStep()
      case 'details':
        return this.renderDetailsStep()
      default:
        return this.renderIntroStep()
    }
  }

  renderIntroStep () {
    return (
      <div>
        <ModalHeader toggle={this.props.onToggle}>Get started in two easy steps</ModalHeader>
        <ModalBody>
          <ol>
            <li>We digitize your products into high quality 3D.</li>
            <li>You integrate our 3D/AR solution into your site with one line of code.</li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.gotoStep.bind(this, 'digitization')}>OK, let's go</Button>{' '}
          <Button color="secondary" onClick={this.props.onToggle}>Later</Button>
        </ModalFooter>
      </div>
    )
  }

  renderDigitizationStep () {
    return (
      <div>
        <ModalHeader toggle={this.props.onToggle}>How would you like to us digitize your products?</ModalHeader>
        <ModalBody>
          <Form>
            <DigitizationOption
              onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'scan')}
              isSelected={this.isDigitizationOptionSelected('scan')}
              label='3D scanning'
              helpText='We handle digitization by coming to you, or having your products shipped to us. Our highest quality option.'
            />
            <DigitizationOption
              onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'cad')}
              isSelected={this.isDigitizationOptionSelected('cad')}
              label='3D CAD model based'
              helpText='Using your CAD, FBX, OBJ files as starting point. For good quality without handling physical products.'
            />
            <DigitizationOption
              onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'image')}
              isSelected={this.isDigitizationOptionSelected('image')}
              label='Image based'
              helpText='Using your CAD, FBX, OBJ files as starting point. For high volume with reasonable quality.'
            />
            <DigitizationOption
              onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'handbuilt')}
              isSelected={this.isDigitizationOptionSelected('handbuilt')}
              label='Hand built custom models'
              helpText='We custom build a 3D model from scratch according to your wishes.'
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.gotoStep.bind(this, 'details')}>Continue</Button>{' '}
          <Button color="secondary" onClick={this.gotoStep.bind(this, 'intro')}>Go back</Button>
        </ModalFooter>
      </div>
    )
  }

  renderDetailsStep () {
    return (
      <div>
        <ModalHeader toggle={this.props.onToggle}>Where do you want to promote your products?</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                placeholder="Ecommerce website url"
                value={this.state.websiteUrl}
                onChange={this.handleFormFieldChange.bind(this, 'websiteUrl')}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Company name"
                value={this.state.companyName}
                onChange={this.handleFormFieldChange.bind(this, 'companyName')}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Your name"
                value={this.state.contactName}
                onChange={this.handleFormFieldChange.bind(this, 'contactName')}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Your email address"
                value={this.state.contactEmail}
                onChange={this.handleFormFieldChange.bind(this, 'contactEmail')}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Your phone number"
                value={this.state.contactPhone}
                onChange={this.handleFormFieldChange.bind(this, 'contactPhone')}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='textarea'
                placeholder="Details, comments, questions?"
                value={this.state.comments}
                onChange={this.handleFormFieldChange.bind(this, 'comments')}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submitRequest}>Finish</Button>{' '}
          <Button color="secondary" onClick={this.gotoStep.bind(this, 'digitization')}>Go back</Button>
        </ModalFooter>
      </div>
    )
  }

  gotoStep (stepName) {
    this.setState({ currentStep: stepName })
  }

  isDigitizationOptionSelected (optionValue) {
    return this.state.selectedDigitizationOptions.indexOf(optionValue) > -1
  }

  onDigitizationOptionToggled (optionValue) {
    const selectedDigitizationOptions = this.state.selectedDigitizationOptions
    const index = selectedDigitizationOptions.indexOf(optionValue)
    if(index > -1) {
      selectedDigitizationOptions.splice(index, 1)
    } else {
      selectedDigitizationOptions.push(optionValue)
    }

    this.setState({ selectedDigitizationOptions })
  }

  handleFormFieldChange (fieldName, event) {
    this.setState({ [fieldName]: event.target.value })
  }

  submitRequest () {
    // TODO
  }
}

export default RequestQuote
