import React from 'react'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

interface IProps {
  img?: string
  title: string
  desc: string
}

const Card = (props: IProps) => {
  return (
    <div>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div>
        <span>Learn more</span>
        <ArrowForwardIcon />
      </div>
    </div>
  )
}

export default Card
