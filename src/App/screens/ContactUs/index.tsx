import React from 'react'
import GoogleMapReact from 'google-map-react'

import Header from '../../components/Header'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Footer from '../../components/Footer'
import classes from './ContactUs.module.scss'

const DEFAULT_PROPS = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}

const contactUs = () => {
  return (
    <>
      <Header
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <section className={classes.content}>
        <div className={classes.contactUs}>
          <ContactInfo />
          <ContactForm />
        </div>
        <div className={classes.map}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyD6hqvimqWSUyh3dwzIXWMNiBzDkrzy_n0',
            }}
            defaultCenter={DEFAULT_PROPS.center}
            defaultZoom={DEFAULT_PROPS.zoom}
          />
          {/* </GoogleMapReact> */}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default contactUs
