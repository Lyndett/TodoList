import React from 'react'

export default function TodoItem({todo, onComplete, onDeleteItem}) {

    const getStyle = () => {
        return{
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #FF9F1C',
            backgroundColor: '#2EC4B6'
        }
    }
  return (
    <div style ={getStyle()}>
        <input type = 'checkbox' checked = {todo.completed}
        onChange={() => onComplete(todo.id)}/>
        {todo.task}
        <button className = 'add-btn' onClick = {() => onDeleteItem(todo.id)}>X</button>
    </div>
  )
}
