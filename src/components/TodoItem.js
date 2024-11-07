import React from 'react';

function TodoItem({ todo, toggleCompleted, editTodo, deleteTodo }) {
  const { id, title, details, dueDate, priority, completed } = todo;

  const handleEdit = () => {
    const newTitle = prompt("Edit Title", title);
    const newDetails = prompt("Edit Details", details);
    const newDueDate = prompt("Edit Due Date", dueDate);
    const newPriority = prompt("Edit Priority", priority);

    if (newTitle && newDetails && newDueDate && newPriority) {
      editTodo(id, newTitle, newDetails, newDueDate, newPriority);
    }
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{details}</p>
      <p><strong>Due Date:</strong> {dueDate}</p>
      <p><strong>Priority:</strong> {priority}</p>
      <div className="todo-item-buttons">
        <button onClick={() => toggleCompleted(id)}>
          {completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
