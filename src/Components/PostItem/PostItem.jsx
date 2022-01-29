import React from 'react'
import MyButton from '../../UI/Buttons/MyButton'
import classes from './PostItem.module.css'

const PostItem = ({ props_postItem, number, removeFunc_inPostItem }) => {
  return (
    <div className={classes.postItem_wrapper}>
      <div className={classes.postItem_infoContainer}>
        <h3 className={classes.postItem_infoContainer__title}>
          {number}. {props_postItem.title}
        </h3>
        <p className={classes.postItem_infoContainer__body}>
          {props_postItem.body}
        </p>
      </div>
      <MyButton onClick={() => removeFunc_inPostItem(props_postItem)}>
        Delete
      </MyButton>
    </div>
  )
}

export default PostItem
