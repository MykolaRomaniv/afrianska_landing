import React from 'react'

import logo from '../../../assets/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Toolbar.module.scss';

const HeaderMain = () => {
    return (
        <div className={classes.toolbar}>
            <img src={logo} alt="" />
            <MenuIcon />
        </div>
    )
}

export default HeaderMain
