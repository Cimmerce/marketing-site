import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button, Container, Col, Row,
  Form, FormGroup, FormText, Label, Input,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

import DigitizationOption from './DigitizationOption'
import styles from './RequestQuote.module.scss'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
      formFields: {
        selectedDigitizationOptions: [],
        websiteUrl: '',
        companyName: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        comments: ''
      },
      validFields: {},
      isSubmitting: false
    }
  }

  bindMethods () {
    this.gotoStep = this.gotoStep.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDigitizationOptionToggled = this.onDigitizationOptionToggled.bind(this)
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
  }

  render () {
    return (
      <div>
        {/* This form code is here so Netlify can pick it up */}
        <form name="requestQuote"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="d-none"
        >
          <input type="text" name="contactName" />
          <input type="text" name="contactEmail" />
          <input type="text" name="contactPhone" />
          <input type="text" name="companyName" />
          <input type="text" name="websiteUrl" />
          <input type="text" name="selectedDigitizationOptions" />
          <input type="text" name="comments" />
          <input type="text" name="bot-field" />
        </form>

        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.onToggle}
          className={styles.modal}
        >
          {this.renderCurrentStep()}
        </Modal>
      </div>
    )
  }

  renderCurrentStep () {
    switch(this.state.currentStep) {
      case 'digitization':
        return this.renderDigitizationStep()
      case 'details':
        return this.renderDetailsStep()
      case 'submitted':
        return this.renderSubmitted()
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
          <Container>
            <Row>
              <Col>
                <DigitizationOption
                  onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'scan')}
                  isSelected={this.isDigitizationOptionSelected('scan')}
                  label='3D scanning'
                  helpText='Our highest quality option. We digitize our products in our studio or come to you.'
                />
              </Col>
              <Col>
                <DigitizationOption
                  onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'cad')}
                  isSelected={this.isDigitizationOptionSelected('cad')}
                  label='3D file based'
                  helpText='Using your CAD, FBX, OBJ files as starting point.'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <DigitizationOption
                  onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'image')}
                  isSelected={this.isDigitizationOptionSelected('image')}
                  label='Image based'
                  helpText='Using your CAD, FBX, OBJ files as starting point. For high volume with reasonable quality.'
                />
              </Col>
              <Col>
                <DigitizationOption
                  onDigitizationOptionToggled={this.onDigitizationOptionToggled.bind(this, 'handbuilt')}
                  isSelected={this.isDigitizationOptionSelected('handbuilt')}
                  label='Hand built custom models'
                  helpText='We custom build a 3D model from scratch according to your wishes.'
                />
              </Col>
            </Row>
          </Container>
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
      <Form
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <ModalHeader toggle={this.props.onToggle}>How can we help you?</ModalHeader>
        <ModalBody>
          <Input
            name="bot-field"
            className="d-none"
          />
          <Container>
            <Row>
              <div className="col-sm">
                <FormGroup tag="fieldset">
                  <legend className={styles.formLegend}>Your business</legend>
                  <FormGroup>
                    <Input
                      placeholder="Company name"
                      value={this.state.formFields.companyName}
                      onChange={this.handleFormFieldChange.bind(this, 'companyName')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      placeholder="Ecommerce website url"
                      value={this.state.formFields.websiteUrl}
                      type="text"
                      onChange={this.handleFormFieldChange.bind(this, 'websiteUrl')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type='textarea'
                      placeholder="How can we help you?"
                      value={this.state.formFields.comments}
                      onChange={this.handleFormFieldChange.bind(this, 'comments')}
                    />
                  </FormGroup>
                </FormGroup>
              </div>
              <div className="col-sm">
                <FormGroup tag="fieldset">
                  <legend className={styles.formLegend}>Your contact details</legend>
                  <FormGroup>
                    <Input
                      placeholder="Your name"
                      value={this.state.formFields.contactName}
                      onChange={this.handleFormFieldChange.bind(this, 'contactName')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      placeholder="Your email address"
                      value={this.state.formFields.contactEmail}
                      type="email"
                      onChange={this.handleFormFieldChange.bind(this, 'contactEmail')}
                      valid={this.state.validFields.contactEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      placeholder="Your phone number"
                      value={this.state.formFields.contactPhone}
                      type="phone"
                      onChange={this.handleFormFieldChange.bind(this, 'contactPhone')}
                    />
                  </FormGroup>
                </FormGroup>
              </div>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" disabled={this.state.isSubmitting}>Finish</Button>{' '}
          <Button color="secondary" onClick={this.gotoStep.bind(this, 'digitization')}>Go back</Button>
        </ModalFooter>
      </Form>
    )
  }

  renderSubmitted () {
    return (
      <div>
        <ModalHeader toggle={this.props.onToggle}>Thank you!</ModalHeader>
        <ModalBody>
          <p>We will get back to you within 1 business day.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onToggle}>Close</Button>
        </ModalFooter>
      </div>
    )
  }

  gotoStep (stepName) {
    this.setState({ currentStep: stepName })
  }

  isDigitizationOptionSelected (optionValue) {
    return this.state.formFields.selectedDigitizationOptions.indexOf(optionValue) > -1
  }

  onDigitizationOptionToggled (optionValue) {
    const formFields = this.state.formFields
    const selectedDigitizationOptions = formFields.selectedDigitizationOptions
    const index = selectedDigitizationOptions.indexOf(optionValue)
    if(index > -1) {
      selectedDigitizationOptions.splice(index, 1)
    } else {
      selectedDigitizationOptions.push(optionValue)
    }

    formFields.selectedDigitizationOptions = selectedDigitizationOptions
    this.setState({ formFields })
  }

  handleFormFieldChange (fieldName, event) {
    const formFields = this.state.formFields
    formFields[fieldName] = event.target.value

    const validFields = this.state.validFields
    if(fieldName === 'contactEmail' && typeof(validFields.contactEmail) !== 'undefined') {
      this.isFormValid()
    }

    this.setState({ formFields })
  }

  handleSubmit (e) {
    if(this.isFormValid()) {
      this.setState({ isSubmitting: true })
      const formFields = this.ensureValidFields()

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "requestQuote", ...formFields })
      })
      .then(() => {
        this.setState({ isSubmitting: false })
        this.gotoStep('submitted')
      })
      .catch(error => {
        this.setState({ isSubmitting: false })
        console.error(error)
      })
    }

    e.preventDefault()
  }

  isFormValid () {
    const validFields = this.state.validFields

    const contactEmail = this.state.formFields.contactEmail
    if(contactEmail === '' || !contactEmail.match(emailRegex)) {
      validFields.contactEmail = false
    } else {
      validFields.contactEmail = true
    }

    this.setState({ validFields })

    return validFields.contactEmail
  }

  ensureValidFields () {
    const formFields = this.state.formFields

    if(
      formFields.websiteUrl !== '' &&
      formFields.websiteUrl.indexOf('://') === -1
    ) {
      formFields.websiteUrl = `http://${formFields.websiteUrl}`
    }

    return formFields
  }

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
}

export default RequestQuote
