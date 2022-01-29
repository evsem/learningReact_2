import React, { useState } from 'react'
import './App.css'
import PostForm from './Components/PostForm/PostForm'
import PostList from './Components/PostList/PostList'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
  ])

  const addNewPost_func = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <div className="main_wrapper">
        <PostForm func_forAddNewPost={addNewPost_func} />
        <PostList props_postList={posts} remove={removePost} />
      </div>
    </div>
  )
}

export default App
