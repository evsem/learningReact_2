import React, { useState } from 'react'
import './App.css'
import PostForm from './Components/PostForm/PostForm'
import PostList from './Components/PostList/PostList'
import MySelect from './UI/Select/MySelect'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
  ])
  let [selectedSort, setSelectedSort] = useState('')

  const addNewPost_func = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    //Перезаписвыаем состояние
    setSelectedSort(sort)
    //Передаём отсортированный массив; функция sort не возвращает новый отсортированный массив, она мутирует с изначальным(для этого массив постов деструктуризируем и разворачиваем); localeCompare - функция сравнения строк.
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
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
        {posts.length !== 0 ? (
          <PostList props_postList={posts} remove={removePost} />
        ) : (
          <p className="text_aboutZeroPost">No posts</p>
        )}
      </div>
    </div>
  )
}

export default App
