import React, { useState } from 'react'
import styles from './Search.module.css'

const Search = ({ setSearch }) => {
  const [input, setInput] = useState('')
  return (
    <div className={styles.search}>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        className={styles.input}
        type="text"
      />
      <img
        onClick={() => {
          setSearch(input)
        }}
        className={styles.btn}
        width={20}
        height={20}
        src="img/search.svg"
        alt="search"
      />
    </div>
  )
}

export default Search
