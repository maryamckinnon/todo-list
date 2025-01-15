import React from 'react';

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo.id} className='todoItem'>
                    {todo.name}
                    <div className='actionsContainer'>
                        <button onClick={() => {
                            handleEditTodo(todo.id)
                        }}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={() => {
                            handleDeleteTodo(todo.id)
                        }}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                    </li>
                )
            })}
        </ul>
    )
}
