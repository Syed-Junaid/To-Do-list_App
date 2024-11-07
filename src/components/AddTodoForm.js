import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (title && details && dueDate) {
      addTodo(title, details, dueDate, priority); // Call addTodo with the form data
      setTitle(''); // Clear the input fields after submitting
      setDetails('');
      setDueDate('');
      setPriority('Low');
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Details" 
        value={details} 
        onChange={(e) => setDetails(e.target.value)} 
      />
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm;
