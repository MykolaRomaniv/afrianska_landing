import BookmarksIcon from '@material-ui/icons/Bookmarks'
import ShareIcon from '@material-ui/icons/Share'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import dafaultClasses from './Post.module.scss' //TODO

interface IProps {
  img?: string
  title: string
  body: string
  author: string
  date: string //TODO Date
  timeToRead: number
  classes?: typeof dafaultClasses
}

const post = (props: IProps) => {
  const classes = props.classes
    ? { ...props.classes, ...dafaultClasses }
    : dafaultClasses
  return (
    <div className={classes.post}>
      <div className={classes.imgContainer}>
        <img src={props.img} alt="" />
      </div>
      <div className={classes.postContent}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <div className={classes.postFooter}>
          <div>
            <div className={classes.author}>{props.author}</div>
            <div className={classes.date}>
              {props.date + ', ' + props.timeToRead + 'min read'}
            </div>
          </div>
          <div className={classes.icons}>
            <Link to="#">
              <BookmarksIcon />
            </Link>
            <Link to="#">
              <ShareIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default post
