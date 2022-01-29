import React, { Children } from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
  return (
    <button className={classes.my_button} {...props}>
      {children}
    </button>
  )
}

export default MyButton
