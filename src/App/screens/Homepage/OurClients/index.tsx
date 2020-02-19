import React from 'react'

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
    <section>
      <h2>Our Beloved Client</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div>
        <div>{CLIENTS_LOGO.map((logo) => logo)}</div>
        <div>More Clients</div>
      </div>
    </section>
  )
}

export default ourClients
