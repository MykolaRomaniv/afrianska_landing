import React from 'react'

import Card from './Card'
import bringTechnology from '../../../../assets/bringTechnology.png'
import buildYourProduct from '../../../../assets/buildYourProduct.png'
import makeYourBusines from '../../../../assets/makeYourBusines.png'

const whatWeDo = () => {
  return (
    <section>
      <h2>What we do to help our client grow in digital era,</h2>
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
      <Card
        img={makeYourBusines}
        title="Bring Technology To Your 
          Comfrotable Home"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
    </section>
  )
}

export default whatWeDo
