import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({ props_postList, remove }) => {
  if (!props_postList.length) {
    return <p className="text_aboutZeroPost">No posts</p>
  }
  return (
    <div className={classes.postList_wrapper}>
      <TransitionGroup>
        {props_postList.map((post, index) => (
          <CSSTransition
            key={props_postList.id}
            timeout={500}
            classNames="post"
          >
            <PostItem
              props_postItem={post}
              number={index + 1}
              removeFunc_inPostItem={remove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostList
