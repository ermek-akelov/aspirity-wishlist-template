import React, { useState } from 'react';

function Todo({ todo, editTodo, deleteTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, value);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: todo.isFinished ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
