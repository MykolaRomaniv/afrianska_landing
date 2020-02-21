import React from 'react'
import classes from './Header.module.scss'

interface IProps {
  title: string
  desc: string
}

const header = (props: IProps) => {
  return (
    <header className={classes.header}>
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </header>
  )
}

export default header
