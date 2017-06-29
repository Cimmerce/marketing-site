import React, { Component } from 'react'
import styles from './Email.scss'

class Email extends Component {
  render() {
    return (
      <form className={styles.form}>
        <input type='submit' value='Get access' className={styles.submitButton} />
        <span className={styles.emailFieldWrapper}>
          <input type='email' id='email' placeholder='Enter email' className={styles.emailField} />
        </span>
        <p className={styles.description}>Enter your email and we will contact you for beta access.</p>
      </form>
    )
  }
}

export default Email
