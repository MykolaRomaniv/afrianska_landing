import { InputAdornment, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import AllPosts from './AllPosts'
import classes from './Blog.module.scss'
import Popular from './Popular'

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
          classes={{ root: classes.search }}
          startAdornment={
            <InputAdornment position="start">
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
