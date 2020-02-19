import React from 'react'

import Button from '../Button'
import logo from '../../../assets/footerLogo.png'

const footer = () => {
  return (
    <section>
      <h2>Intersted to work with our team?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <Button>Let’s Talk</Button>
      <hr />
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <span>Afrianska</span>
      </div>
      <div>
        <div>
          <span>A.</span>Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </div>
        <div>
          <span>T.</span>+62-812-7313-4321
        </div>
        <div>
          <span>E</span>hello.afrian@gmail.com
        </div>
      </div>
      <div>
        <div>About US</div>
        <div>About</div>
        <div>What We Do</div>
        <div>Projects</div>
        <div>How It Work With Us</div>
      </div>
      <div>
          <div>Follow US</div>
          <div>Instagram</div>
          <div>Facebook</div>
          <div>LinkedIn</div>
          <div>Youtube</div>
      </div>
      <div>2019 © Afrianska. All rights reserved.</div>
    </section>
  )
}

export default footer
