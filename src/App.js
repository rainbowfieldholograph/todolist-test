import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import './nullstyle.css'
import Home from './pages/home/Home'

const App = () => {
  const [items, setItems] = useState([
    { title: 'Название', desc: 'Описание', completed: false },
    {
      title: 'lorem',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut molestias illum non similique facere reiciendis odit iure sunt, ex dignissimos nam at eaque temporibus placeat blanditiis nulla possimus mollitia quia.',
      completed: true,
    },
    {
      title: 'task 3',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni maxime rerum incidunt saepe. Inventore voluptatem esse, nisi laborum dignissimos dolor accusantium, nemo totam doloremque officia enim? Aut, inventore optio!',
      completed: false,
    },
    {
      title: 'Lorem ipsum dolor sit.',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem in excepturi incidunt nostrum? Culpa aperiam dolores quas debitis cum, necessitatibus, corrupti, magnam unde natus tenetur iure non explicabo! Reprehenderit, architecto?',
      completed: false,
    },
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
