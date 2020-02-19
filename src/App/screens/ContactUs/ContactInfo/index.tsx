import React from 'react'

import contactImg from '../../../../assets/contactImg.png'
import PhoneIcon from '@material-ui/icons/Phone'
import WebSiteIcon from '@material-ui/icons/Language'
import MailIcon from '@material-ui/icons/Mail'

const contactInfo = () => {
  return (
    <div>
      <div>
        <img src={contactImg} alt="" />
      </div>
      <div>
        <div>ADDRESS</div>
        <div>
          Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.
        </div>
      </div>
      <div>
        <div>PHONE</div>
        <div>
          <PhoneIcon />
          <span>+62-812-7313-4321</span>
        </div>
        <div>
          <PhoneIcon />
          <span>+62-817-000-1234</span>
        </div>
      </div>
      <div>
        <div>ONLINE SERVICE</div>
        <div>
          <WebSiteIcon />
          <span>www.afrianska.com</span>
        </div>
        <div>
          <MailIcon />
          <span>hello.afrian@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default contactInfo
