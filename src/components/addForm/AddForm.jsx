import React, { useState } from 'react'
import styles from './AddForm.module.css'

const AddForm = ({ addNew, setModal }) => {
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()

  const addNewTask = () => {
    console.log(addNew)
    addNew(title, desc)
    setModal(false)
    setTitle('')
    setDesc('')
  }

  return (
    <div className={styles.addForm}>
      <div>
        <h3>Введите название:</h3>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className={styles.input}
          type="text"
        />
      </div>
      <div>
        <h3>Введите описание:</h3>
        <input
          onChange={(e) => {
            setDesc(e.target.value)
          }}
          value={desc}
          className={styles.input}
          type="text"
        />
      </div>
      <button
        onClick={() => {
          addNewTask()
        }}
        className={styles.btn}
      >
        Создать задачу
      </button>
    </div>
  )
}

export default AddForm
