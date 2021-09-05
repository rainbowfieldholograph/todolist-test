import React from 'react'
import styles from './Search.module.css'

const Search = ({ setSearch, search }) => {
  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        className={styles.input}
        type="text"
      />
      <img width={20} height={20} src="img/search.svg" alt="search" />
    </div>
  )
}

export default Search
