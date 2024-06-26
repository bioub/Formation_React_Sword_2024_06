// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import { fetchTodos } from './api';

function App() {
  const [todos, setTodos] = useState([
    // { id: 123, title: 'ABC', completed: false },
    // { id: 456, title: 'DEF', completed: true },
    // { id: 789, title: 'XYZ', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');
  const editingId = 789;

  useEffect(() => {
    
    fetchTodos().then((todos) => {
     // setTodos(todos);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      { id: Math.random(), title: newTodo, completed: false },
    ]);
    setNewTodo('');
  }

  function handleToggleClick(event) {
    const globalChecked = event.target.checked;

    setTodos(
      // idéalement ne pas tout cloner (plus simple avec useImmer) :
      // todos.map((todo) => todo.completed === globalChecked ? todo : ({ ...todo, completed: globalChecked }))
      todos.map((todo) => ({ ...todo, completed: globalChecked }))
    );
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" onChange={handleToggleClick} />
        <input
          type="text"
          className="todos-new-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={todo.id === editingId}
          />
        ))}
      </div>
    </>
  );
}

export default App;
