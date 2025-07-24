import React from 'react'
import { useTodoStore } from '../store/store'
import TodoCard from './todoCard'

const TodoList = () => {

    const {
    filteredList,
  } = useTodoStore()

    const todos = filteredList()
  return (
    <div >
        {
            todos.map((todo)=>(
                <TodoCard title={todo.title} done={todo.done}/>
            ))
        }
    </div>
  )
}

export default TodoList