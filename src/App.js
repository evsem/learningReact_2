import React, { useMemo, useState } from 'react'
import './App.css'
import PostFilter from './Components/PostFilter'
import PostForm from './Components/PostForm/PostForm'
import PostList from './Components/PostList/PostList'
import MyInput from './UI/Inputs/MyInput'
import MySelect from './UI/Select/MySelect'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'PHP', body: 'Programming language' },
    { id: 3, title: 'Swift', body: 'Programming language' },
    { id: 4, title: 'Java', body: 'Programming language' },
    { id: 5, title: 'Python', body: 'Programming language' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })

  const addNewPost_func = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    console.log('soua')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const selectedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])

  return (
    <div className="App">
      <div className="main_wrapper">
        <PostForm func_forAddNewPost={addNewPost_func} />
        <hr style={{ margin: '10px 0px' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList
          props_postList={selectedAndSearchedPosts}
          remove={removePost}
        />
      </div>
    </div>
  )
}

export default App
