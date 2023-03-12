import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, newValue) => {
    const editedTodos = [...todos];
    const todo = editedTodos.find((todo) => todo.id === id);
    todo.text = newValue;
    setTodos(editedTodos);
  };

  const deleteTodo = (id) => {
    const deletedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  const toggleTodo = (id) => {
    const toggledTodos = [...todos];
    const todo = toggledTodos.find((todo) => todo.id === id);
    todo.isFinished = !todo.isFinished;
    setTodos(toggledTodos);
  };

  const sortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => b.isFinished - a.isFinished);
    setTodos(sortedTodos);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        sortTodos={sortTodos}
      />
    </div>
  );
}

export default App;
