import React from 'react'

import carRepetition from '../../../../assets/CarRepetition.png'
import smartHome from '../../../../assets/SmartHome.png'
import sparklite from '../../../../assets/Sparklite.png'
import classes from './OurProjects.module.scss'
import ProjectCard from './ProjectCard'

const ourProject = () => {
  return (
    <section className={classes.ourProjects}>
      <div className={classes.sectionHeader}>
        <h2>Our Finished Project</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className={classes.projects}>
        <ProjectCard
          title="Smart Home Installation"
          desc="In Muarakana Housing Estate"
          isFirst={true}
          img={smartHome}
        />
        <div className={classes.otherProjects}>
          <ProjectCard
            title="Sparklite App"
            desc="Marketplace"
            img={sparklite}
          />
          <ProjectCard
            title="Car-Rapetition App"
            desc="Board"
            img={carRepetition}
          />
        </div>
      </div>
    </section>
  )
}

export default ourProject
