import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import './nullstyle.css'
import Home from './pages/home/Home'

const App = () => {
  const [items, setItems] = useState([
    { title: 'Название', desc: 'Описание', completed: false },
    { title: 'qq2', desc: 'ww2', completed: true },
    { title: 'qq3', desc: 'ww3', completed: false },
    { title: 'qq4', desc: 'ww4', completed: false },
  ])

  const [search, setSearch] = useState('')

  const addNewItem = (title, desc, completed = false) => {
    setItems([...items, { title: title, desc: desc, completed: completed }])
  }

  const onToggleCompleted = (index) => {
    setItems((prevItems) =>
      prevItems.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    )
  }

  const filterItems = () => {
    return items.filter((item) => item.title.toUpperCase().includes(search.toUpperCase()))
  }

  return (
    <div className="wrapper">
      <Header />
      <Home
        search={search}
        setSearch={setSearch}
        filterItems={filterItems}
        addNew={addNewItem}
        onToggleCompleted={onToggleCompleted}
      />
    </div>
  )
}

export default App
