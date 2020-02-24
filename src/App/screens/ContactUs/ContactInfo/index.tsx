import WebSiteIcon from '@material-ui/icons/Language'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import React from 'react'

import contactImg from '../../../../assets/contactImg.png'
import classes from './ContactInfo.module.scss'

const contactInfo = () => {
  return (
    <div className={classes.contactInfo}>
      <div>
        <img src={contactImg} alt="" />
      </div>
      <div>
        <div className={classes.title}>ADDRESS</div>
        <div className={classes.text}>
          Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.
        </div>
      </div>
      <div>
        <div className={classes.title}>PHONE</div>
        <div className={classes.iconBox}>
          <PhoneIcon />
          <span>+62-812-7313-4321</span>
        </div>
        <div className={classes.iconBox}>
          <PhoneIcon />
          <span>+62-817-000-1234</span>
        </div>
      </div>
      <div>
        <div className={classes.title}>ONLINE SERVICE</div>
        <div className={classes.iconBox}>
          <WebSiteIcon />
          <span>www.afrianska.com</span>
        </div>
        <div className={classes.iconBox}>
          <MailIcon />
          <span>hello.afrian@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default contactInfo
