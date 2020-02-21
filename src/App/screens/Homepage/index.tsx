import React from 'react'

import Header from './Header'
import WhatWeDo from './WhatWeDo'
import OurProjects from './OurProjects'
import OurClients from './OurClients'
import Footer from '../../components/Footer'
import classes from './Homepage.module.scss';

const homepage = () => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <WhatWeDo />
        <OurProjects />
      </div>
      <OurClients />
      <div className={classes.footerWrapper}>
        <Footer />
      </div>
    </>
  )
}

export default homepage
