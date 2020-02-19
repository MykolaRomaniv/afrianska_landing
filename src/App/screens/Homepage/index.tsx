import React from 'react'

import Header from './Header'
import WhatWeDo from './WhatWeDo'
import OurProjects from './OurProjects';
import OurClients from './OurClients';
import Footer from '../../components/Footer';

const homepage = () => {
  return (
    <>
      <Header />
      <WhatWeDo />
      <OurProjects />
      <OurClients />
      <Footer />
    </>
  )
}

export default homepage
