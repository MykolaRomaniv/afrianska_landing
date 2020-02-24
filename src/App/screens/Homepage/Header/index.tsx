import React from 'react'

import headerImg from '../../../../assets/header_illustration.png'
import Button from '../../../components/Button'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerText}>
        <h1>
          New Automation <br /> Tool for Your Home
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
          odio tellus elit.
        </p>
        <Button>See Our Project</Button>
      </div>
      <div className={classes.headerImg}>
        <img src={headerImg} alt="" />
      </div>
    </header>
  )
}

export default Header
