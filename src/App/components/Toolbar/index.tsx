import MenuIcon from '@material-ui/icons/Menu'
import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import ForumIcon from '@material-ui/icons/Forum';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import logo from '../../../assets/logo.svg'
import classes from './Toolbar.module.scss'

class HeaderMain extends Component {
  state = {
    opened: false,
  }

  toggleDrawer = () => {
    this.setState({
      opened: !this.state.opened,
    })
  }

  render() {
    return (
      <div className={classes.toolbar} id={'start'}>
        <Link to="/#start">
          <img src={logo} alt="" />
        </Link>
        <MenuIcon className={classes.burgerMenu} onClick={this.toggleDrawer} />
        <Drawer open={this.state.opened} onClose={this.toggleDrawer}>
          <List>
            <Link to="/#start" onClick={this.toggleDrawer}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
            <Link to="/blog#start" onClick={this.toggleDrawer}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={'Blog'} />
              </ListItem>
            </Link>
            <Link to="/contact-us#start" onClick={this.toggleDrawer}>
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
}

export default HeaderMain
