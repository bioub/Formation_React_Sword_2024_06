import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { fetchTodos } from './api';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('ABC');
  const [editingId, setEditingId] = useState();

  useEffect(() => {
    fetchTodos().then((todos) => {
     setTodos(todos);
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

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function handleEdit(newTodo) {
    setTodos(todos.map((t) => t.id === newTodo.id ? newTodo : t));
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
            onDelete={handleDelete}
            onEdit={handleEdit}
            onEditingIdChange={setEditingId}
          />
        ))}
      </div>
    </>
  );
}

export default Todos;
