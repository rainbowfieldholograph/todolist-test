import React from 'react'
import Circle from '../circle/Circle'
import styles from './Item.module.css'

const Item = ({ title, desc, completed, onToggleCompleted, index }) => {
  return (
    <div className={styles.box}>
      <div className={styles.flexBox}>
        <Circle index={index} onToggleCompleted={onToggleCompleted} completed={completed} />
        <div>
          <h2>{completed ? <del>{title}</del> : title}</h2>
          <p>{completed ? <del>{desc}</del> : desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
