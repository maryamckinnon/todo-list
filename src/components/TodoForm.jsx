import { useState } from 'react';

export default function TodoForm({ handleAddTodo }) {
  const [title, setTitle] = useState('');
  
  return (
    <div className='todo-form'>
      <input
        className='add-todo-input'
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className='add-todo-button'
        onClick={() => {
          setTitle('');
          handleAddTodo(title);
        }}
      >Add</button>
    </div>
  )
}

