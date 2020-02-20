import React from 'react'

import Button from '../Button'
import logo from '../../../assets/footerLogo.png'
import classes from './Footer.module.scss'

const footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <footer className={classes.footer}>
        <div className={classes.footerHeader}>
          <div className={classes.footerText}>
            <h2>Intersted to work with our team?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <Button>Let’s Talk</Button>
        </div>
        <hr />
        <div className={classes.row}>
          <div>
            <div className={classes.logo}>
              <div>
                <img src={logo} alt="" />
              </div>
              <span>Afrianska</span>
            </div>
            <div className={classes.aboutInfo}>
              <div>
                <span>A.</span>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </div>
              <div>
                <span>T.</span>+62-812-7313-4321
              </div>
              <div>
                <span>E</span>hello.afrian@gmail.com
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.columnName}>About US</div>
            <div>About</div>
            <div>What We Do</div>
            <div>Projects</div>
            <div>How It Work With Us</div>
          </div>
          <div className={classes.column}>
            <div className={classes.columnName}>Follow US</div>
            <div>Instagram</div>
            <div>Facebook</div>
            <div>LinkedIn</div>
            <div>Youtube</div>
          </div>
        </div>
        <div className={classes.copyright}>2019 © Afrianska. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default footer
