import React, { useState } from 'react'
import { useTodoStore } from '../store/store'

const Panel = () => {
    const {
    addTask,
    setFilterType,
    type
  } = useTodoStore()

  const [newTask, setNewTask] = useState('')

  return (
    <div>
        <h2>Todo App - {type}</h2>
        <div >
            <button onClick={() => setFilterType('all')}>All</button>
            <button onClick={() => setFilterType('done')}>Done</button>
            <button onClick={() => setFilterType('undone')}>Undone</button>
        </div>
        <input onChange={(e)=>setNewTask(e.target.value)} type="text" />
        <button onClick={()=>addTask(newTask)}>create</button>
    </div>
  )
}

export default Panel