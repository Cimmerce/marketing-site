import React from 'react'
import { Button } from 'reactstrap'

const GetStartedButton = () => (
  <Button
    color='primary'
    size='sm'
    onClick={() => { document.getElementById('getStartedButton').click() }}
  >Get started</Button>
)

export default GetStartedButton
