import React from 'react'

import Footer from '../../components/Footer'
import Header from './Header'
import classes from './Homepage.module.scss'
import OurClients from './OurClients'
import OurProjects from './OurProjects'
import WhatWeDo from './WhatWeDo'

const homepage = () => {
  return (
    <>
      <Header />
        <WhatWeDo />
        <OurProjects />
      <OurClients />
      <div className={classes.footerWrapper}>
        <Footer />
      </div>
    </>
  )
}

export default homepage
