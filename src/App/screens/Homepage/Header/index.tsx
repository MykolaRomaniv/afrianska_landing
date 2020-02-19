import React from 'react'

import classes from './Header.module.scss'
import headerImg from '../../../../assets/header_illustration.png'
import Button from '../../../components/Button';

const Header = () => {
  return (
    <section className={classes.header}>
      <div>
        <h1>New Automation Tool for Your Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
          odio tellus elit.
        </p>
        <Button>See Our Project</Button>
      </div>
      <div>
          <img src={headerImg} alt=""/>
      </div>
    </section>
  )
}

export default Header
