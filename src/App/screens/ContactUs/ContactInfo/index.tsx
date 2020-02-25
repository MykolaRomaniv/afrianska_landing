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
          <span>
            <a href="tel:+62-812-7313-4321">+62-812-7313-4321</a>
          </span>
        </div>
        <div className={classes.iconBox}>
          <PhoneIcon />
          <span>
            <a href="tel:+62-817-000-1234">+62-817-000-1234</a>
          </span>
        </div>
      </div>
      <div>
        <div className={classes.title}>ONLINE SERVICE</div>
        <div className={classes.iconBox}>
          <WebSiteIcon />
          <span>
            <a href="www.afrianska.com">www.afrianska.com</a>
          </span>
        </div>
        <div className={classes.iconBox}>
          <MailIcon />
          <span>
            <a href="mailto:hello.afrian@gmail.com">hello.afrian@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default contactInfo
