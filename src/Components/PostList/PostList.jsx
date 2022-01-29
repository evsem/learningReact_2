import React from 'react'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({ props_postList }) => {
  return (
    <div className={classes.postList_wrapper}>
      {props_postList.map((post, index) => (
        <PostItem
          props_postItem={post}
          key={props_postList.id}
          number={index + 1}
        />
      ))}
    </div>
  )
}

export default PostList
