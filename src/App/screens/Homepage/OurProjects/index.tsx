import React from 'react'

import smartHome from '../../../../assets/SmartHome.png';
import carRepetition from '../../../../assets/CarRepetition.png';
import sparklite from '../../../../assets/Sparklite.png';


const ourProject = () => {
  return (
    <section>
      <h2>Our Finished Project</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      //TODO something smarter
      <div>
          <h3>Smart Home Installation</h3>
          <p>In Muarakana Housing Estate</p>
          <div>
              <img src={smartHome} alt="smart home"/>
          </div>
      </div>
      <div>
          <h3>Sparklite App</h3>
          <p>Marketplace</p>
          <div>
              <img src={carRepetition} alt="smart home"/>
          </div>
      </div>
      <div>
          <h3>Car-Rapetition App</h3>
          <p>Board</p>
          <div>
              <img src={sparklite} alt="smart home"/>
          </div>
      </div>
    </section>
  )
}

export default ourProject
