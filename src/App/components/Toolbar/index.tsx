import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import logo from '../../../assets/logo.svg'
import classes from './Toolbar.module.scss'

const HeaderMain = () => {
  const [opened, setOpened] = useState(false)

  const toggleDrawer = () => {
    setOpened(!opened)
  }

  return (
    <div className={classes.toolbar} id={'start'}>
      <Link to="/#start">
        <img src={logo} alt="" />
      </Link>
      <MenuIcon className={classes.burgerMenu} onClick={toggleDrawer} />
      <Drawer open={opened} onClose={toggleDrawer}>
        <List>
          <Link to="/#start" onClick={toggleDrawer}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>
          <Link to="/blog#start" onClick={toggleDrawer}>
            <ListItem button>
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary={'Blog'} />
            </ListItem>
          </Link>
          <Link to="/contact-us#start" onClick={toggleDrawer}>
            <ListItem button>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary={'Contact us'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

export default HeaderMain
