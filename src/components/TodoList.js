import React from 'react';
import Todo from './Todo';

function TodoList({ todos, editTodo, deleteTodo, toggleTodo, sortTodos }) {
  return (
    <div>
      <button onClick={sortTodos}>Sort by Finished First</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
