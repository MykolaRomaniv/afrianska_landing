import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import Post from '../../../components/Post'
import allPost1 from '../../../../assets/allPost1.png'
import allPost2 from '../../../../assets/allPost2.png'
import allPost3 from '../../../../assets/allPost3.png'
import allPost4 from '../../../../assets/allPost4.png'
import allPost5 from '../../../../assets/allPost5.png'

const allArticles = () => {
  return (
    <section>
      <Post
        img={allPost1}
        title="Massa eu in laoreet enim augue vulputate nunc."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={allPost2}
        title="Feugiat a euismod arcu feugiat posuere morbi."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={allPost3}
        title="Sociis purus pellentesque faucibus vitae et felis."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={allPost4}
        title="Cursus feugiat mi pellentesque mauris sed eu."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={allPost5}
        title="A morbi arcu curabitur etiam fringilla augue."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec."
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <div>
        <div>
          <ArrowBackIcon />
          <span>New Post</span>
        </div>
        <div>
            <span>Old Post</span>
            <ArrowForwardIcon />
        </div>
      </div>
    </section>
  )
}

export default allArticles
