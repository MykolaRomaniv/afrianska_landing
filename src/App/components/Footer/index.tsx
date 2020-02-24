import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import logo from '../../../assets/footerLogo.png'
import Button from '../Button'
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
          <Link to="/contact-us#start">
            <Button>Let’s Talk</Button>
          </Link>
        </div>
        <hr />
        <div className={classes.row}>
          <div>
            <Link to="/#start">
              <div className={classes.logo}>
                <div>
                  <img src={logo} alt="" />
                </div>
                <span>Afrianska</span>
              </div>
            </Link>
            <div className={classes.aboutInfo}>
              <div>
                <span>A.</span>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </div>
              <div>
                <span>T.</span>
                <a href="tel:+62-812-7313-4321">+62-812-7313-4321 </a>
              </div>
              <div>
                <span>E</span>
                <a href="mailto:hello.afrian@gmail.com">
                  hello.afrian@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <Link to="/#start">
              <div className={classes.columnName}>About US</div>
            </Link>
            <Link to="/#header">
              <div>About</div>
            </Link>
            <Link to="/#whatWeDo">
              <div>What We Do</div>
            </Link>
            <Link to="/#projects">
              <div>Projects</div>
            </Link>
            <Link to="/#clients">
              <div>How It Work With Us</div>
            </Link>
          </div>
          <div className={classes.column}>
            <Link to="/contact-us#start">
              <div className={classes.columnName}>Follow US</div>
            </Link>
            <Link to="#">
              <div>Instagram</div>
            </Link>
            <Link to="#">
              <div>Facebook</div>
            </Link>
            <Link to="#">
              <div>LinkedIn</div>
            </Link>
            <Link to="#">
              <div>Youtube</div>
            </Link>
          </div>
        </div>
        <div className={classes.copyright}>
          2019 © Afrianska. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default footer
