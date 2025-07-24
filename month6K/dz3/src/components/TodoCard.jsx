import { useTodoStore } from '../store/store'

const TodoCard = ({title, done}) => {

    const {deleteTask, editTask, toggleDone } = useTodoStore()
    const changeTitle =()=>{
        const newTitle = prompt('edited title')
        editTask(title,newTitle)
    }
  return (
    <div style={{border: '1px white solid', borderRadius: 16, marginTop:20, padding:10}}>
        <h4>{title}</h4>
        <input onClick={()=>toggleDone(title)} type="checkbox" checked={done} />
        <button onClick={()=>deleteTask(title)}>Delete</button>
        <button onClick={()=>changeTitle()}>Edit</button>
    </div>
  )
}

export default TodoCard