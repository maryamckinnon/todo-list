import React, { useState } from 'react';

function Task({ todo, handleEditTodo, handleDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            handleEditTodo({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className='edit-todo-button' onClick={() => setIsEditing(true)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </>
    );
  }
  return (
    <label className='todo-item'>
      <input
        className='task-input'
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          handleEditTodo({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button className='delete-todo-button' onClick={() => handleDeleteTodo(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </label>
  );
}

export default Task;
