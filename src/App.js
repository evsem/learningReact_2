import React, { useState } from 'react'
import './App.css'
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
  let [selectedSort, setSelectedSort] = useState('')
  let [searchQuery, setSearchQuery] = useState('')

  const addNewPost_func = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const getSortedPosts = () => {
    console.log('Hello')
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }

  const selectedPosts = getSortedPosts()
  const sortPosts = (sort) => {
    //Перезаписвыаем состояние
    setSelectedSort(sort)
    //Передаём отсортированный массив; функция sort не возвращает новый отсортированный массив, она мутирует с тем массивом, к которму она была применена(состояние напрямую менять нельзя); localeCompare - функция сравнения строк.
  }
  return (
    <div className="App">
      <div className="main_wrapper">
        <PostForm func_forAddNewPost={addNewPost_func} />
        <hr style={{ margin: '10px 0px' }} />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sortirovka"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By discription' },
          ]}
        />
        <MyInput
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {posts.length !== 0 ? (
          <PostList props_postList={selectedPosts} remove={removePost} />
        ) : (
          <p className="text_aboutZeroPost">No posts</p>
        )}
      </div>
    </div>
  )
}

export default App
