import React, { Component } from 'react'
import cx from 'classnames'
import 'whatwg-fetch'

import styles from './Email.module.scss'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default class Email extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      isValidEmail: false,
      isSubmitting: false,
      didAttemptSubmit: false,
      didCompleteSubmit: false
    }

    this.bindMethods()
  }

  bindMethods () {
    this.handleEmailChanged = this.handleEmailChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return this.state.didCompleteSubmit ? this.renderThanks() : this.renderForm()
  }

  renderForm () {
    const isSubmittingClassName = this.state.isSubmitting ? styles.isSubmitting : ''
    const invalidClassName = this.state.didAttemptSubmit && !this.state.isValidEmail ? styles.invalid : ''

    return (
      <form className={cx(styles.form, isSubmittingClassName)} onSubmit={this.handleSubmit}>
        <input type='submit' value='Get access' className={cx(styles.submitButton, invalidClassName)} />
        <span className={styles.emailFieldWrapper}>
          <input type='email' id='email' placeholder='Enter email' className={cx(styles.emailField, invalidClassName)} value={this.state.email} onChange={this.handleEmailChanged} />
        </span>
        <p className={styles.description}>Enter your email and we will contact you. We promise not to spam you.</p>
      </form>
    )
  }

  renderThanks () {
    return (
      <p className={styles.thanks}>Thanks for reaching out. We will contact you shortly.</p>
    )
  }

  handleEmailChanged (event) {
    const email = event.currentTarget.value
    const isValidEmail = this.validateEmail(email)
    this.setState({ email, isValidEmail })
  }

  validateEmail (email) {
    return !!email.match(emailRegex)
  }

  handleSubmit (event) {
    event.preventDefault()

    const isSubmitting = this.state.isValidEmail
    this.setState({ isSubmitting, didAttemptSubmit: true })

    if (isSubmitting) {
      const data = new FormData()
      data.append('email', this.state.email)
      fetch('https://hooks.zapier.com/hooks/catch/2351698/5bmq2g/', {
        method: 'POST',
        body: data
      }).then(response => {
        return response.json()
      }).then(json => {
        const isSubmitting = false
        const didCompleteSubmit = (json.status === 'success')
        this.setState({ isSubmitting, didCompleteSubmit })

        if(!didCompleteSubmit) {
          console.error('Failed to submit email', json)
        }
      }).catch(error => {
        console.error('Failed to submit email', error)
      })
    }
  }
}
