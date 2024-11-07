import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load tasks from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (title, details, dueDate, priority) => {
    const newTodo = { 
      id: Date.now(), 
      title, 
      details, 
      dueDate, 
      priority, 
      completed: false 
    };
    setTodos([...todos, newTodo]); // Add new task to state
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodo = (id, newTitle, newDetails, newDueDate, newPriority) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: newTitle, details: newDetails, dueDate: newDueDate, priority: newPriority } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <input 
        type="text" 
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddTodoForm addTodo={addTodo} /> {/* Pass the addTodo function to the form */}
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleCompleted={toggleCompleted} 
            editTodo={editTodo} 
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
