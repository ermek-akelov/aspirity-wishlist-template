import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: value,
      isFinished: false,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
