import React from 'react'

import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '../../../components/Button'

const contactForm = () => {
  return (
    <form action="#">
      <div>SEND US MESSAGE</div>
      <div>
        <InputLabel htmlFor="name">Full Name</InputLabel>
        <TextField id="name" placeholder="Your Name" variant="outlined" />
      </div>
      <div>
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField id="email" placeholder="Your Email" variant="outlined" />
      </div>
      <div>
        <InputLabel htmlFor="message">Message</InputLabel>
        <TextField
          id="message"
          multiline
          rows="4"
          variant="outlined"
          placeholder="Your Message"
        />
      </div>
      <Button>SUBMIT</Button>
    </form>
  )
}

export default contactForm
