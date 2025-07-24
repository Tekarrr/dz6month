import { create } from "zustand";

export const useTodoStore = create((set, get)=>({
    type: 'all',
    todoList: [{
        title: 'task1',
        done: false,
    }],
    addTask: (title) =>
        set(state => ({
        todoList: [...state.todoList, { title, done: false }]
        })),
    deleteTask: (title) =>
        set(state => ({
        todoList: state.todoList.filter(task => task.title !== title)
        })),
    editTask: (oldTitle, newTitle) =>
        set(state => ({
        todoList: state.todoList.map(task =>
            task.title === oldTitle ? { ...task, title: newTitle } : task
        )
        })),
    toggleDone: (title) =>
        set(state => ({
        todoList: state.todoList.map(task =>
            task.title === title ? { ...task, done: !task.done } : task
        )
        })),
    setFilterType: (type) =>
        set({ type }),
    filteredList: () => {
        const { todoList, type } = get()
        if (type === 'done') return todoList.filter(task => task.done)
        if (type === 'undone') return todoList.filter(task => !task.done)
        return todoList
    }
}))