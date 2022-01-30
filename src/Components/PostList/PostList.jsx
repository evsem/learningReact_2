import React from 'react'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({ props_postList, remove }) => {
  if (!props_postList.length) {
    return <p className="text_aboutZeroPost">No posts</p>
  }
  return (
    <div className={classes.postList_wrapper}>
      {props_postList.map((post, index) => (
        <PostItem
          props_postItem={post}
          key={props_postList.id}
          number={index + 1}
          removeFunc_inPostItem={remove}
        />
      ))}
    </div>
  )
}

export default PostList
