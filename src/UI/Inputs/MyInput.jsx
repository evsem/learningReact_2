import React from 'react'
import classes from './MyInput.module.css'

const MyInput = (props) => {
  return <input {...props} className={classes.my_input}></input>
}

export default MyInput
