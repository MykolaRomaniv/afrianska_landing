import { Paper } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import React from 'react'

import Button from '../../../components/Button'
import classes from './ContactForm.module.scss'

const contactForm = () => {
  return (
    <Paper elevation={3} className={classes.contactForm}>
      <form action="#">
        <div className={classes.title}>SEND US MESSAGE</div>
        <div className={classes.inputBox}>
          <InputLabel htmlFor="name" classes={{ root: classes.inputLabel }}>
            Full Name
          </InputLabel>
          <TextField
            id="name"
            placeholder="Your Name"
            variant="outlined"
            classes={{ root: classes.inputElement }}
          />
        </div>
        <div className={classes.inputBox}>
          <InputLabel htmlFor="email" classes={{ root: classes.inputLabel }}>
            Email
          </InputLabel>
          <TextField
            id="email"
            placeholder="Your Email"
            variant="outlined"
            classes={{ root: classes.inputElement }}
          />
        </div>
        <div className={classes.inputBox}>
          <InputLabel htmlFor="message" classes={{ root: classes.inputLabel }}>
            Message
          </InputLabel>
          <TextField
            id="message"
            multiline
            rows="4"
            variant="outlined"
            placeholder="Your Message"
            classes={{ root: classes.inputElement }}
          />
        </div>
        <div className={classes.button}>
          <Button>SUBMIT</Button>
        </div>
      </form>
    </Paper>
  )
}

export default contactForm
