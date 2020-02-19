import React from 'react'

interface IProps {
    title: string
    desc: string
}

const header = (props: IProps) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>
        {props.desc}
      </p>
    </header>
  )
}

export default header
