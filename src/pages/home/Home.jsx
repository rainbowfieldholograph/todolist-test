import React, { useState } from 'react'
import styles from './Home.module.css'
import Item from '../../components/item/Item'
import Search from '../../components/search/Search'
import Modal from '../../components/modal/Modal'
import AddForm from '../../components/addForm/AddForm'

const Home = ({ addNew, onToggleCompleted, filterItems, setSearch, search }) => {
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
        <Search search={search} setSearch={setSearch} />
      </div>
      <h1>{search ? `Поиск по запросу: ${search}` : 'Все задачи'}</h1>
      {filterItems().map((i, index) => (
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
