import React from 'react'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import classes from './Card.module.scss'

interface IProps {
  img?: string
  title: string
  desc: string
  className?: string
}

const Card = (props: IProps) => {
  return (
    <div className={[classes.card, props.className].join(' ')}>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className={classes.learnMore}>
        <span>Learn more</span>
        <ArrowForwardIcon />
      </div>
    </div>
  )
}

export default Card
