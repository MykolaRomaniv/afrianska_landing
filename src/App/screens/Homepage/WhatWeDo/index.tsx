import React from 'react'

import bringTechnology from '../../../../assets/bringTechnology.png'
import buildYourProduct from '../../../../assets/buildYourProduct.png'
import makeYourBusines from '../../../../assets/makeYourBusines.png'
import Card from './Card'
import classes from './WhatWeDo.module.scss'

const whatWeDo = () => {
  return (
    <section className={classes.whatWeDo}>
      <div className={classes.column}>
        <h2>What we do to help our client grow in digital era,</h2>
        <Card
          img={makeYourBusines}
          title="Bring Technology To Your
      Comfrotable Home"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
      <div className={classes.column}>
        <Card
          img={bringTechnology}
          title="Bring Technology To Your
      Comfrotable Home"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Card
          img={buildYourProduct}
          title="Make Your business To Be
      Better Famous In Internet"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
    </section>
  )
}

export default whatWeDo
