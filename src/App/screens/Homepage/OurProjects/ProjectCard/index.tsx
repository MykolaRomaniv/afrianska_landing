import React from 'react'

import classes from './ProjectCard.module.scss'

interface IProps {
  img?: string
  className?: string
  title: string
  desc: string
  isFirst?: boolean
}

const Project = (props: IProps) => {
  return (
    <div className={props.isFirst ? classes.firstProject : classes.project}>
      <div className={classes.projectText}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default Project
