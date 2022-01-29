import React, { useState } from 'react'
import MyButton from '../../UI/Buttons/MyButton'
import MyInput from '../../UI/Inputs/MyInput'

const PostForm = ({ func_forAddNewPost }) => {
  let [param, setParam] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...param,
      id: Date.now(),
    }
    func_forAddNewPost(newPost)
    setParam({ title: '', body: '' })
  }
  return (
    <form>
      <MyInput
        type="text"
        placeholder="Title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  )
}

export default PostForm
