import React from 'react'

import Header from '../../components/Header'
import SearchIcon from '@material-ui/icons/Search'
import Popular from './Popular'
import AllPosts from './AllPosts'
import Footer from '../../components/Footer'

const blog = () => {
  return (
    <>
      <Header
        title="Blog Afrianska"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <div>
        <input type="search" name="search" id="search" />
        <SearchIcon />
      </div>
      <Popular />
      <hr />
      <AllPosts />
      <Footer />
    </>
  )
}

export default blog
