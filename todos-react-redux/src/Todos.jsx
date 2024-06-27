import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { fetchTodos } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { newTodoSelector, todosSelector } from './store/selectors';
import { addTodo, updateNewTodo } from './store/actions';

function Todos() {
  const todos = useSelector(todosSelector);
  const newTodo = useSelector(newTodoSelector);
  const dispatch = useDispatch();
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('ABC');

  // Exercice 5
  // Créer l'action updateEditingId
  // Créer un nouveau reducer pour editingId en vous inspirant de newTodoReducer
  // initialState doit être -1
  // Faire le dispatch là où c'est nécessaire
  const [editingId, setEditingId] = useState();

  useEffect(() => {
    fetchTodos().then((todos) => {
      // Exercice 1
      // Créer un action creator setAllTodo
      // Ajouter un cas dans le reducer todosReducer qui reçoit payload et le retourne
      // Dispatcher ci-dessous l'action en passant par l'action creator
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(newTodo));
  }

  function handleToggleClick(event) {
    const globalChecked = event.target.checked;

    // Exercice 2
    // Créer un action creator toggleCheckedAllTodo qui reçoit un booléen
    // Ajouter un cas dans le reducer todosReducer qui reçoit payload affecter ce booléen
    // à toutes les clés completed du tableau
    // Appeler l'action creator ici avec dispatch

    // setTodos(
    //   // idéalement ne pas tout cloner (plus simple avec useImmer) :
    //   // todos.map((todo) => todo.completed === globalChecked ? todo : ({ ...todo, completed: globalChecked }))
    //   todos.map((todo) => ({ ...todo, completed: globalChecked }))
    // );
  }

  function handleDelete(todo) {
    // Exercice 3
    // Supprimer la todos du store (à vous de trouver les étapes)

    // setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function handleEdit(newTodo) {
    // Exercice 4
    // Editer la todo du store (à vous de trouver les étapes)

    // setTodos(todos.map((t) => t.id === newTodo.id ? newTodo : t));
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="checkbox" onChange={handleToggleClick} />
        <input
          type="text"
          className="todos-new-input"
          value={newTodo}
          onChange={(e) => dispatch(updateNewTodo(e.target.value))}
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
