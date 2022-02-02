//Параметрами данная функция принимает посты(posts) и метод сортировки(sort)

//Пользовательские(кастомные) хуки - это хуки, которые используют внутри себя стандартные React хуки
import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  return sortedPosts
}

//Параметрами данная функция принимает посты(posts), метод сортировки(sort) и поисковую строку(query)
export const usePosts = (posts, sort, query) => {
  let sortedPosts = useSortedPosts(posts, sort)

  const selectedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    )
  }, [query, sortedPosts])

  return selectedAndSearchedPosts
}
