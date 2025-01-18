import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(todoTitle) {
    const uniqueId = uuidv4();
    const newTodoList = [
      ...todos,
      {
        id: uniqueId,
        title: todoTitle,
        done: false
      }
    ];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(nextTodo) {
    setTodos(todos.map((todo) => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    const newList = todos.filter((todo) => todo.id !== todoId);
    persistData(newList);
    setTodos(newList);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <div className='todo-container'>
      <TodoForm
        handleAddTodo={handleAddTodo}
      />
      <TodoList 
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}

export default App;
