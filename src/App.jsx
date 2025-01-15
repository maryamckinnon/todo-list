import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodo(newTodo) {
    const newTodoItem = { id: uuidv4(), name: newTodo};
    const newTodoList = [...todos, newTodoItem];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodo(todoId) {
    const newList = todos.filter((todo) => todo.id !== todoId);
    persistData(newList)
    setTodos(newList);
  }

  function handleEditTodo(todoId) {
    const valueToBeEdited = todos.find((todo) => todo.id === todoId);
    setTodoValue(valueToBeEdited.name);
    handleDeleteTodo(todoId);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
  }, [])

  
  return (
    <>
      <TodoInput
        handleAddTodo={handleAddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        todoValue={todoValue}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

export default App
