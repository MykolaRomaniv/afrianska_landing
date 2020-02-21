import React from 'react'

import Header from '../../components/Header'
import SearchIcon from '@material-ui/icons/Search'
import Popular from './Popular'
import AllPosts from './AllPosts'
import Footer from '../../components/Footer'
import { OutlinedInput, InputAdornment } from '@material-ui/core'
import classes from './Blog.module.scss'



const blog = () => {
  return (
    <>
      <Header
        title="Blog Afrianska"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />

      <div className={[classes.content, classes.blog].join(' ')}>
        <OutlinedInput
          id="search"
          placeholder="Search Article"
          classes={{root: classes.search, adornedStart: classes.adornedStart}}
          startAdornment={
            <InputAdornment position="start" >
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Popular />
        <hr />
        <AllPosts />
      </div>
      <Footer />
    </>
  )
}

export default blog
