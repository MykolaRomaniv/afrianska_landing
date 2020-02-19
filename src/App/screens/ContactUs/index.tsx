import React from 'react'
import GoogleMapReact from 'google-map-react'

import Header from '../../components/Header'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Footer from '../../components/Footer';

const contactUs = () => {
  return (
    <>
      <Header
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <section>
        <div>
          <ContactInfo />
          <ContactForm />
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD6hqvimqWSUyh3dwzIXWMNiBzDkrzy_n0' }}
          //   defaultCenter={DEFAULT_PROPS.center}
          //   defaultZoom={DEFAULT_PROPS.zoom}
        >
          <p>
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          </p>
        </GoogleMapReact>
      </section>
      <Footer />
    </>
  )
}

export default contactUs
