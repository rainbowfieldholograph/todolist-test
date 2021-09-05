import React, { useState } from 'react'
import styles from './Home.module.css'
import Item from '../../components/item/Item'
import Search from '../../components/search/Search'
import Modal from '../../components/modal/Modal'
import AddForm from '../../components/addForm/AddForm'

const Home = ({ addNew, onToggleCompleted, onSearch, setSearch }) => {
  const [modal, setModal] = useState(false)
  return (
    <div className={styles.home}>
      <Modal visible={modal} setVisible={setModal}>
        <AddForm setModal={setModal} addNew={addNew} />
      </Modal>
      <div className={styles.box}>
        <button
          onClick={() => {
            setModal(true)
          }}
          className={styles.btn}
        >
          Добавить новую задачу
        </button>
        <Search setSearch={setSearch} onSearch={onSearch} />
      </div>
      {onSearch('').map((i, index) => (
        <Item
          key={index}
          title={i.title}
          desc={i.desc}
          completed={i.completed}
          onToggleCompleted={onToggleCompleted}
          index={index}
        />
      ))}
    </div>
  )
}

export default Home
