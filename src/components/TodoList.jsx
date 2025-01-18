import React from "react";
import Task from './Task';

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Task
            todo={todo}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        </div>
      ))}
    </ul>
  );
}
