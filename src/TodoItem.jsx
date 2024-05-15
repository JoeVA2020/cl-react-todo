import React from 'react';
import './TodoList.css'
const TodoItem = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
