import React from 'react'

import BookmarksIcon from '@material-ui/icons/Bookmarks'
import ShareIcon from '@material-ui/icons/Share'

interface IProps {
  img?: string
  title: string
  body: string
  author: string
  date: string //TODO Date
  timeToRead: number
  classes?: string
}

const post = (props: IProps) => {
  return (
    <div className={props.classes}>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <div>{props.author}</div>
        <div>{props.date + ', ' + props.timeToRead + 'min read'}</div>
        <BookmarksIcon />
        <ShareIcon />
      </div>
    </div>
  )
}

export default post
