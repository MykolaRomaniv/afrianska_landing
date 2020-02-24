import React from 'react'

import classes from './Button.module.scss'

interface IProps {
  children: string
}

const button = (props: IProps) => {
  return <button className={classes.primaryBtn}>{props.children}</button>
}

export default button
