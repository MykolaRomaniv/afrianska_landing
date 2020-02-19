import React from 'react'

import Post from '../../../components/Post'
import post1 from '../../../../assets/popular1.png'
import post2 from '../../../../assets/popular2.png'
import post3 from '../../../../assets/popular3.png'
import post4 from '../../../../assets/popular4.png'

const popular = () => {
  return (
    <section>
      <div>POPULAR</div>
      <Post
        img={post1}
        title="Feugiat sodales at nullam tellus."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={post2}
        title="Porta proin tellus sed pulvinar odio eu pulvinar."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={post3}
        title="Non quam tortor, proin eu egestas scelerisque purus."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <Post
        img={post4}
        title="Amet amet sed pharetra risus sit eget interdum."
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        author="Samatha Leuthex"
        date="May 5"
        timeToRead={3}
      />
      <div>See All Popular Article</div>
    </section>
  )
}

export default popular
