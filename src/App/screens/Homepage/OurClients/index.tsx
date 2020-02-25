import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import classes from './OurClients.module.scss'

const CLIENTS_LOGO = [
  'LOGO CLIENT 1',
  'LOGO CLIENT 2',
  'LOGO CLIENT 3',
  'LOGO CLIENT 4',
  'LOGO CLIENT 5',
  'LOGO CLIENT 6',
  'LOGO CLIENT 7',
]

const ourClients = () => {
  return (
    <div className={classes.ourClients} id="clients">
      <section className={classes.content}>
        <div className={classes.sectionHeader}>
          <h2>Our Beloved Client</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className={classes.clientsList}>
          {CLIENTS_LOGO.map((logo, index) => (
            <Link to="#" key={index}>
              <div>{logo}</div>
            </Link>
          ))}
          <Link to="#">
            <div className={classes.more}>More Clients</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ourClients
