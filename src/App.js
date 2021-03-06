import React, { useState, useEffect } from 'react'
import PostService from './API/PostService'
import './App.css'
import PostFilter from './Components/PostFilter'
import PostForm from './Components/PostForm/PostForm'
import PostList from './Components/PostList/PostList'
import { usePosts } from './Hooks/usePosts'
import MyButton from './UI/Buttons/MyButton'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'PHP', body: 'Programming language' },
    { id: 3, title: 'Swift', body: 'Programming language' },
    { id: 4, title: 'Java', body: 'Programming language' },
    { id: 5, title: 'Python', body: 'Programming language' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })
  let sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const addNewPost_func = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  async function fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
  }
  return (
    <div className="App">
      <div className="main_wrapper">
        <PostForm func_forAddNewPost={addNewPost_func} />
        <hr style={{ margin: '10px 0px' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <MyButton onClick={fetchPosts}>Get posts with server</MyButton>
        <PostList props_postList={sortedAndSearchedPosts} remove={removePost} />
      </div>
    </div>
  )
}

export default App
