import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

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
      <Link to="/blog#start">
        <div className={classes.learnMore}>
          <span>Learn more</span>
          <ArrowForwardIcon />
        </div>
      </Link>
    </div>
  )
}

export default Card
