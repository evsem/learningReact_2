import React from 'react'
import MyInput from '../UI/Inputs/MyInput'
import MySelect from '../UI/Select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By discription' },
        ]}
      />
    </div>
  )
}

export default PostFilter
