import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import logo from '../../../assets/logo.svg'
import classes from './Toolbar.module.scss'

const HeaderMain = () => {
  return (
    <div className={classes.toolbar} id={'start'}>
      <Link to="/#start">
        <img src={logo} alt="" />
      </Link>
      <MenuIcon className={classes.burgerMenu} />
    </div>
  )
}

export default HeaderMain
